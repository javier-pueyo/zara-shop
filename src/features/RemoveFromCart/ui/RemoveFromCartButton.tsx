'use client';

import { useCart } from '@/entities/cart';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/Button/Button';

interface RemoveFromCartButtonProps {
  hash: string;
  className?: string;
  onRemove?: () => void;
}

export const RemoveFromCartButton = ({
  hash,
  className,
  onRemove,
}: RemoveFromCartButtonProps) => {
  const { removeItem } = useCart();

  const handleClick = () => {
    if (onRemove) {
      onRemove();
    } else {
      removeItem(hash);
    }
  };

  return (
    <Button
      variant="plain"
      onClick={handleClick}
      className={cn('text-content-danger text-xs', className)}
    >
      Eliminar
    </Button>
  );
};
