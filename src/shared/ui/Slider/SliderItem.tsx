import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

export interface SliderItemProps {
    children: ReactNode;
    className?: string;
}

export const SliderItem = ({ children, className }: SliderItemProps) => {
    return (
        <div
            className={cn(
                'tablet:min-w-[40vw] desktop:min-w-[18vw] border-ui-border-primary min-w-[80vw] flex-shrink-0 snap-start border-t border-r border-b first:border-l',
                className,
            )}
        >
            {children}
        </div>
    );
};
