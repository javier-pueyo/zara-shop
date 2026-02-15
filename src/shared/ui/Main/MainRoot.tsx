import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

interface MainProps {
  children: ReactNode;
  className?: string;
}

export const MainRoot = ({ children, className }: MainProps) => {
  return <main className={cn('tablet:px-10 px-4', className)}>{children}</main>;
};
