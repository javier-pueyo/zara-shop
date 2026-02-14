import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    max: 'xl' | 'lg';
}

const containerSizes = {
    xl: 'max-w-[1720px]',
    lg: 'max-w-[1200px]',
};

export const Container = ({ children, className, max }: ContainerProps) => {
    return (
        <div className={cn(
            'mx-auto w-full',
            containerSizes[max],
            className
        )}>
            {children}
        </div>
    );
};
