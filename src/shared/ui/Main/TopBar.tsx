import { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';
import { Container } from '@/shared/ui/Container';

interface MainTopBarProps {
  children: ReactNode;
  className?: string;
}

export const MainTopBar = ({ children, className }: MainTopBarProps) => {
  return (
    <div id="main-topbar" className={cn('w-full', className)}>
      <Container max="xl">{children}</Container>
    </div>
  );
};
