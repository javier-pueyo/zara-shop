import { renderHook, act } from '@testing-library/react';
import { useSlider } from './useSlider';
import { vi, describe, it, expect } from 'vitest';

describe('useSlider', () => {
  let scrollContainer: HTMLDivElement;
  let trackContainer: HTMLDivElement;

  // Helper to setup refs
  const setupRefs = (result: any) => {
    // Mock DOM elements
    scrollContainer = document.createElement('div');
    trackContainer = document.createElement('div');

    // Mock dimensional properties
    Object.defineProperty(scrollContainer, 'scrollWidth', {
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(scrollContainer, 'clientWidth', {
      configurable: true,
      value: 500,
    });

    // Mock scrollLeft with getter/setter to track changes
    let scrollLeft = 0;
    Object.defineProperty(scrollContainer, 'scrollLeft', {
      configurable: true,
      get: () => scrollLeft,
      set: (v) => {
        scrollLeft = v;
      },
    });

    // Mock getBoundingClientRect
    Object.defineProperty(scrollContainer, 'getBoundingClientRect', {
      value: () => ({ left: 0 }),
    });

    Object.defineProperty(trackContainer, 'clientWidth', {
      configurable: true,
      value: 500,
    });

    // Assign refs
    (result.current.refs.scrollRef as any).current = scrollContainer;
    (result.current.refs.trackRef as any).current = trackContainer;
  };

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useSlider(null));

    expect(result.current.state.scrollProgress).toBe(0);
    expect(result.current.state.isDraggingSlider).toBe(false);
    expect(typeof result.current.handlers.slider.onPointerDown).toBe(
      'function',
    );
  });

  it('should not start drag if movement is within threshold', () => {
    const { result } = renderHook(() => useSlider(null));
    setupRefs(result);

    act(() => {
      // Down
      result.current.handlers.slider.onPointerDown({ clientX: 100 } as any);
      // Move 4px
      result.current.handlers.slider.onPointerMove({ clientX: 104 } as any);
    });

    expect(result.current.state.isDraggingSlider).toBe(false);
  });

  it('should start drag if movement exceeds threshold', () => {
    const { result } = renderHook(() => useSlider(null));
    setupRefs(result);

    act(() => {
      // Down
      result.current.handlers.slider.onPointerDown({ clientX: 100 } as any);
      // Move 6px
      result.current.handlers.slider.onPointerMove({ clientX: 106 } as any);
    });

    expect(result.current.state.isDraggingSlider).toBe(true);
  });

  it('should update scroll position when dragging slider', () => {
    const { result } = renderHook(() => useSlider(null));
    setupRefs(result);

    act(() => {
      // Down
      result.current.handlers.slider.onPointerDown({ clientX: 100 } as any);
      // Move 10px (past threshold)
      result.current.handlers.slider.onPointerMove({ clientX: 90 } as any);
      // Dragging left means scrolling right (increasing scrollLeft)
      // Delta is -10. New scrollLeft should be startScroll (0) - (-10) = 10
    });

    expect(scrollContainer.scrollLeft).toBe(10);
    // Progress: 10 / (1000 - 500) * 100 = 2%
    expect(result.current.state.scrollProgress).toBe(2);
  });

  it('should prevent default click if dragged', () => {
    const { result } = renderHook(() => useSlider(null));
    setupRefs(result);
    const preventDefault = vi.fn();
    const stopPropagation = vi.fn();

    act(() => {
      // Drag sequence
      result.current.handlers.slider.onPointerDown({ clientX: 100 } as any);
      result.current.handlers.slider.onPointerMove({ clientX: 110 } as any);
      result.current.handlers.slider.onPointerUp();
    });

    // Click event fires after Up
    act(() => {
      result.current.handlers.slider.onClickCapture({
        preventDefault,
        stopPropagation,
      } as any);
    });

    expect(preventDefault).toHaveBeenCalled();
    expect(stopPropagation).toHaveBeenCalled();
  });

  it('should allow click if not dragged', () => {
    const { result } = renderHook(() => useSlider(null));
    setupRefs(result);
    const preventDefault = vi.fn();
    const stopPropagation = vi.fn();

    act(() => {
      // Click sequence (no move)
      result.current.handlers.slider.onPointerDown({ clientX: 100 } as any);
      result.current.handlers.slider.onPointerUp();
    });

    act(() => {
      result.current.handlers.slider.onClickCapture({
        preventDefault,
        stopPropagation,
      } as any);
    });

    expect(preventDefault).not.toHaveBeenCalled();
    expect(stopPropagation).not.toHaveBeenCalled();
  });

});
