import { cn } from '@/shared/lib/utils';
import { useSliderContext } from './SliderContext';

export interface SliderBarProps {
    className?: string;
}

export const SliderBar = ({ className }: SliderBarProps) => {
    const { refs, state } = useSliderContext();
    const { trackRef } = refs;
    const {
        scrollProgress,
        barRatio,
        isDraggingSlider,
    } = state;

    return (
        <div
            ref={trackRef}
            className={cn(
                'bg-ui-border-secondary relative mt-12 h-[1px] w-full',
                className,
            )}
        >
            <div
                className={cn(
                    'bg-content-primary absolute top-1/2 left-0 h-[1px] -translate-y-1/2',
                    !isDraggingSlider && 'transition-transform duration-75 ease-out',
                )}
                style={{
                    width: `${barRatio * 100}%`,
                    transform: `translateY(-50%) translateX(${scrollProgress * (barRatio > 0 && barRatio < 1 ? 1 / barRatio - 1 : 0)}%)`,
                    opacity: barRatio >= 1 ? 0 : 1,
                    pointerEvents: barRatio >= 1 ? 'none' : 'auto',
                }}
            />
        </div>
    );
};
