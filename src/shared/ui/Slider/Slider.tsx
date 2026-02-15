import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';
import { useSlider } from './useSlider';

interface SliderProps {
    children: ReactNode;
    className?: string;
}

interface SliderItemProps {
    children: ReactNode;
    className?: string;
}

const SliderItem = ({ children, className }: SliderItemProps) => {
    return (
        <div className={cn(
            "min-w-[80vw] tablet:min-w-[40vw] desktop:min-w-[18vw] flex-shrink-0 snap-start border-r border-b border-ui-border-primary p-4",
            className
        )}>
            {children}
        </div>
    );
};

const SliderRoot = ({ children, className }: SliderProps) => {
    const { refs, state, handlers } = useSlider(children);
    const { scrollRef, trackRef } = refs;
    const { scrollProgress, barRatio, isDraggingSlider, isDraggingBar } = state;

    return (
        <div className={className}>
            <div className="relative">
                <div
                    ref={scrollRef}
                    onScroll={handlers.slider.onScroll}
                    onPointerDown={handlers.slider.onPointerDown}
                    onPointerMove={handlers.slider.onPointerMove}
                    onPointerUp={handlers.slider.onPointerUp}
                    onPointerLeave={handlers.slider.onPointerLeave}
                    onClickCapture={handlers.slider.onClickCapture}
                    onDragStart={handlers.slider.onDragStart}
                    className={cn(
                        "flex overflow-x-auto no-scrollbar border-t border-l border-ui-border-primary snap-x snap-mandatory touch-pan-y transition-all pr-4",
                        isDraggingSlider ? "cursor-grabbing" : "cursor-grab"
                    )}
                >
                    {children}
                </div>
            </div>

            <div ref={trackRef} className="mt-12 h-[1px] w-full bg-ui-border-secondary relative">
                <div
                    onPointerDown={handlers.bar.onPointerDown}
                    onPointerMove={handlers.bar.onPointerMove}
                    onPointerUp={handlers.bar.onPointerUp}
                    className={cn(
                        "absolute top-1/2 left-0 h-[1px] bg-content-primary -translate-y-1/2 cursor-pointer touch-none",
                        !isDraggingBar && !isDraggingSlider && "transition-transform duration-75 ease-out"
                    )}
                    style={{
                        width: `${barRatio * 100}%`,
                        transform: `translateY(-50%) translateX(${scrollProgress * (barRatio > 0 && barRatio < 1 ? (1 / barRatio) - 1 : 0)}%)`,
                        opacity: barRatio >= 1 ? 0 : 1,
                        pointerEvents: barRatio >= 1 ? 'none' : 'auto'
                    }}
                />
            </div>
        </div>
    );
};

export const Slider = Object.assign(SliderRoot, {
    Item: SliderItem,
});
