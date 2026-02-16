import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';
import { useSlider } from './useSlider';
import { SliderContext } from './SliderContext';

export interface SliderProps {
    children: ReactNode;
    className?: string;
}

export const SliderRoot = ({ children, className }: SliderProps) => {
    const slider = useSlider(children);
    const { refs } = slider;
    const { containerRef } = refs;

    return (
        <SliderContext.Provider value={{ ...slider }}>
            <div
                ref={containerRef}
                className={cn(className, 'w-full px-0')}
            >
                {children}
            </div>
        </SliderContext.Provider>
    );
};
