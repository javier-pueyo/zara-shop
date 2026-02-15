import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

interface MainSectionProps {
  children: ReactNode;
  className?: string;
}

export const MainSection = ({ children, className }: MainSectionProps) => {
  return (
    <div
      className={cn(
        // Mobile
        'pt-6',
        'pb-20',
        '[#main-topbar_+_&]:pt-1',
        // Tablet & Desktop
        'tablet:pt-12',
        '[#main-topbar_+_&]:tablet:pt-12',
        className,
      )}
    >
      {children}
    </div>
  );
};
