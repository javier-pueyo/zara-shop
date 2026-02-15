import { ReactNode, ElementType } from 'react';
import { cn } from '@/shared/lib/utils';

// Definimos las variantes basadas en tu diseño
const typographyVariants = {
  hero: 'text-xl uppercase text-content-primary',
  title: 'text-lg uppercase text-content-primary',
  'input-text': 'text-base text-content-primary',
  body: 'text-sm text-content-secondary',
  detail: 'text-xs text-content-secondary',
  tiny: 'text-2xs uppercase text-content-tertiary tracking-widest',
};

interface TypographyProps {
  variant: keyof typeof typographyVariants;
  as?: ElementType; // Permite pasar h1, h2, span, p, etc.
  children: ReactNode;
  className?: string;
}

export const Typography = ({
  variant,
  as: Component = 'p',
  children,
  className,
}: TypographyProps) => {
  return (
    <Component
      className={cn(
        typographyVariants[variant],
        // El line-height: 1 ya viene del @theme, pero lo aseguramos
        'leading-none',
        className,
      )}
    >
      {children}
    </Component>
  );
};
