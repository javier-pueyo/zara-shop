import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

interface MainNavigationProps {
  children: ReactNode;
  className?: string;
}

export const MainNavigation = ({
  children,
  className,
}: MainNavigationProps) => {
  return (
    <div
      className={cn(
        'bg-surface tablet:pt-6 tablet:pb-14 tablet:px-10 fixed bottom-0 left-0 w-full px-4 pt-4 pb-6',
        className,
      )}
    >
      {children}
    </div>
  );
};
