import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

interface MainProps {
    children: ReactNode;
    className?: string;
}

export const MainRoot = ({ children, className }: MainProps) => {
    return (
        <main className={cn(
            'px-4 tablet:px-10',
            className
        )}>
            {children}
        </main>
    );
};
