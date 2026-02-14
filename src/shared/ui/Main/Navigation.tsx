import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

interface MainNavigationProps {
    children: ReactNode;
    className?: string;
}

export const MainNavigation = ({ children, className }: MainNavigationProps) => {
    return (
        <div className={cn(
            'fixed bottom-0 left-0 w-full bg-surface pt-4 pb-6 tablet:pt-6 tablet:pb-14 px-4 tablet:px-10',
            className
        )}>
            {children}
        </div>
    );
};
