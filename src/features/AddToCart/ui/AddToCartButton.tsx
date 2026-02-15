'use client';

import { Button } from '@/shared/ui/Button/Button';

interface AddToCartButtonProps {
  disabled?: boolean;
  className?: string;
}

export const AddToCartButton = ({
  disabled,
  className,
}: AddToCartButtonProps) => {
  return (
    <Button
      type="submit"
      variant="primary"
      className={className}
      disabled={disabled}
    >
      Añadir
    </Button>
  );
};
