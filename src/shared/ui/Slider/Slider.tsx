import { useState, useRef, useEffect, ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

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
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDraggingSlider, setIsDraggingSlider] = useState(false);
    const [isDraggingBar, setIsDraggingBar] = useState(false);
    const [barRatio, setBarRatio] = useState(0.25);

    const scrollRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const startX = useRef(0);
    const startScroll = useRef(0);

    const handleScroll = () => {
        if (scrollRef.current && !isDraggingSlider && !isDraggingBar) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const scrollableWidth = scrollWidth - clientWidth;
            const progress = scrollableWidth > 0 ? (scrollLeft / scrollableWidth) * 100 : 0;
            setScrollProgress(progress);
        }
    };

    // Slider Drag logic
    const onSliderDown = (e: React.PointerEvent) => {
        if (!scrollRef.current) return;
        setIsDraggingSlider(true);
        startX.current = e.clientX;
        startScroll.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.scrollSnapType = 'none';
        scrollRef.current.style.scrollBehavior = 'auto';
    };

    const onSliderMove = (e: React.PointerEvent) => {
        if (!isDraggingSlider || !scrollRef.current) return;
        const dx = e.clientX - startX.current;
        scrollRef.current.scrollLeft = startScroll.current - dx;

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const scrollableWidth = scrollWidth - clientWidth;
        const progress = scrollableWidth > 0 ? (scrollLeft / scrollableWidth) * 100 : 0;
        setScrollProgress(progress);
    };

    const onSliderUp = () => {
        if (!scrollRef.current) return;
        setIsDraggingSlider(false);
        scrollRef.current.style.scrollSnapType = 'x mandatory';
        scrollRef.current.style.scrollBehavior = 'smooth';
    };

    useEffect(() => {
        const updateWidth = () => {
            if (scrollRef.current) {
                const { left } = scrollRef.current.getBoundingClientRect();
                const newWidth = window.innerWidth - left;
                scrollRef.current.style.width = `${newWidth}px`;

                const { scrollWidth } = scrollRef.current;
                const ratio = scrollWidth > 0 ? Math.min(newWidth / scrollWidth, 1) : 0;
                setBarRatio(ratio);
            }
        };

        // Initial calculation
        updateWidth();

        // Update on resize
        window.addEventListener('resize', updateWidth);

        // Also update when children change (content might change width)
        // We use a MutationObserver for more robust content change detection if needed,
        // but for now re-running on children change or window resize is good.
        // Also added a timeout to allow layout to settle
        const timeoutId = setTimeout(updateWidth, 100);

        return () => {
            window.removeEventListener('resize', updateWidth);
            clearTimeout(timeoutId);
        };
    }, [children]);

    const onBarUp = (e: React.PointerEvent) => {
        setIsDraggingBar(false);
        if (scrollRef.current) {
            scrollRef.current.style.scrollSnapType = 'x mandatory';
            scrollRef.current.style.scrollBehavior = 'smooth';
        }
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    };

    // Bar Drag logic
    const onBarDown = (e: React.PointerEvent) => {
        if (!scrollRef.current || !trackRef.current) return;
        setIsDraggingBar(true);
        startX.current = e.clientX;
        startScroll.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.scrollSnapType = 'none';
        scrollRef.current.style.scrollBehavior = 'auto';
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    };

    const onBarMove = (e: React.PointerEvent) => {
        if (!isDraggingBar || !scrollRef.current || !trackRef.current) return;
        const dx = e.clientX - startX.current;
        const { scrollWidth, clientWidth } = scrollRef.current;
        const trackWidth = trackRef.current.clientWidth;
        const barWidth = trackWidth * barRatio;

        const scrollDelta = (dx / (trackWidth - barWidth)) * (scrollWidth - clientWidth);
        scrollRef.current.scrollLeft = startScroll.current + scrollDelta;

        const scrollableWidth = scrollWidth - clientWidth;
        const progress = scrollableWidth > 0 ? (scrollRef.current.scrollLeft / scrollableWidth) * 100 : 0;
        setScrollProgress(progress);
    };

    return (
        <div className={className}>
            <div className="relative">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    onPointerDown={onSliderDown}
                    onPointerMove={onSliderMove}
                    onPointerUp={onSliderUp}
                    onPointerLeave={onSliderUp}
                    className={cn(
                        "flex overflow-x-auto no-scrollbar border-t border-l border-ui-border-primary snap-x snap-mandatory touch-pan-y transition-all pr-4",
                        isDraggingSlider ? "cursor-grabbing [&>*]:pointer-events-none" : "cursor-grab"
                    )}
                >
                    {children}
                </div>
            </div>

            <div ref={trackRef} className="mt-12 h-[1px] w-full bg-ui-border-secondary relative">
                <div
                    onPointerDown={onBarDown}
                    onPointerMove={onBarMove}
                    onPointerUp={onBarUp}
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
