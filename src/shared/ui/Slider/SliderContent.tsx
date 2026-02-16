import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';
import { useSliderContext } from './SliderContext';

export interface SliderContentProps {
    children: ReactNode;
    className?: string;
}

export const SliderContent = ({ className, children }: SliderContentProps) => {
    const { refs, state, handlers } = useSliderContext();
    const { scrollRef } = refs;
    const {
        isDraggingSlider,
        paddingLeft,
    } = state;

    return (
        <div
            ref={scrollRef}
            onScroll={handlers.slider.onScroll}
            onPointerDown={handlers.slider.onPointerDown}
            onPointerMove={handlers.slider.onPointerMove}
            onPointerUp={handlers.slider.onPointerUp}
            onPointerLeave={handlers.slider.onPointerLeave}
            onClickCapture={handlers.slider.onClickCapture}
            onDragStart={handlers.slider.onDragStart}
            style={{
                marginLeft: `-${paddingLeft}px`,
                paddingLeft: `${paddingLeft}px`,
                scrollPaddingLeft: `${paddingLeft}px`,
            }}
            className={cn(
                'w-screen no-scrollbar border-ui-border-primary flex touch-pan-y snap-x snap-mandatory overflow-x-auto',
                isDraggingSlider ? 'cursor-grabbing' : 'cursor-grab',
                className
            )}
        >
            {children}
        </div>
    );
};
