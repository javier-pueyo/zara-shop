import { useState, useRef, useEffect, RefObject } from 'react';

export const useSlider = (children: React.ReactNode) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [barRatio, setBarRatio] = useState(0.25);
  const [paddingLeft, setPaddingLeft] = useState(0);

  // Drag states
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);

  // Refs for drag calculations
  const startX = useRef(0);
  const startScroll = useRef(0);
  const isDown = useRef(false);
  const didDrag = useRef(false);

  /**
   * Calculates the ratio between the visible area and total scroll width.
   * Updates the scrollbar thumb size based on this ratio.
   */
  const updateWidth = () => {
    if (containerRef.current) {
      const { left } = containerRef.current.getBoundingClientRect();
      setPaddingLeft(left);
    }

    if (scrollRef.current) {
      const { clientWidth, scrollWidth } = scrollRef.current;
      const ratio = scrollWidth > 0 ? Math.min(clientWidth / scrollWidth, 1) : 0;
      setBarRatio(ratio);
    }
  };

  /**
   * Updates the scroll progress state (0-100%) based on native scroll event.
   * Only runs when not actively dragging to avoid conflicts.
   */
  const handleScroll = () => {
    if (scrollRef.current && !isDraggingSlider) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollableWidth = scrollWidth - clientWidth;
      const progress =
        scrollableWidth > 0 ? (scrollLeft / scrollableWidth) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  /**
   * Manually updates the scroll position based on drag movement (dx).
   * Recalculates progress to keep UI in sync.
   */
  const updateProgressFromDrag = (dragMovedDistance: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft = startScroll.current - dragMovedDistance;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const scrollableWidth = scrollWidth - clientWidth;
    const progress =
      scrollableWidth > 0 ? (scrollLeft / scrollableWidth) * 100 : 0;
    setScrollProgress(progress);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    const timeoutId = setTimeout(updateWidth, 100);

    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timeoutId);
    };
  }, [children]);

  // --- Event Handlers (Slider) ---

  /**
   * Initiates drag for the content area.
   * Captures start position and current scroll state.
   */
  const onSliderDown = (e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    didDrag.current = false;
    startX.current = e.clientX;
    startScroll.current = scrollRef.current.scrollLeft;
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (didDrag.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  /**
   * Handles content dragging with a threshold check.
   * Disables scroll snapping during drag for smooth movement.
   */
  const onSliderMove = (e: React.PointerEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    const dragMovedDistance = e.clientX - startX.current;
    let isDragging = isDraggingSlider;

    // Threshold for drag
    if (Math.abs(dragMovedDistance) > 5) {
      didDrag.current = true;
      if (!isDraggingSlider) {
        setIsDraggingSlider(true);
        isDragging = true;
        scrollRef.current.style.scrollSnapType = 'none';
        scrollRef.current.style.scrollBehavior = 'auto';
      }
    }

    if (isDragging) {
      updateProgressFromDrag(dragMovedDistance);
    }
  };

  /**
   * Ends content drag sequence.
   * Re-enables scroll snapping and smooth behavior.
   */
  const onSliderUp = () => {
    isDown.current = false;
    if (!scrollRef.current) return;

    if (isDraggingSlider) {
      setIsDraggingSlider(false);
      scrollRef.current.style.scrollSnapType = 'x mandatory';
      scrollRef.current.style.scrollBehavior = 'smooth';
    }

    setTimeout(() => {
      didDrag.current = false;
    }, 0);
  };

  return {
    refs: { scrollRef, trackRef, containerRef },
    state: {
      scrollProgress,
      barRatio,
      isDraggingSlider,
      paddingLeft,
    },
    handlers: {
      slider: {
        onScroll: handleScroll,
        onPointerDown: onSliderDown,
        onPointerMove: onSliderMove,
        onPointerUp: onSliderUp,
        onPointerLeave: onSliderUp,
        onClickCapture,
        onDragStart: (e: React.DragEvent) => e.preventDefault(),
      },
    },
  };
};
