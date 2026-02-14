'use client';

import { useCart } from '@/entities/cart';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/Button/Button';

interface RemoveFromCartButtonProps {
    hash: string;
    className?: string;
}

export const RemoveFromCartButton = ({
    hash,
    className,
}: RemoveFromCartButtonProps) => {
    const { removeItem } = useCart();

    return (
        <Button
            variant="plain"
            onClick={() => removeItem(hash)}
            className={cn("text-xs text-content-danger", className)}
        >
            Eliminar
        </Button>
    );
};
