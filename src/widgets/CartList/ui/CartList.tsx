import { useCart } from '@/entities/cart';
import { ProductHorizontalCard } from '@/entities/product/ui/ProductHorizontalCard/ProductHorizontalCard';

import { cn } from '@/shared/lib/utils';

export const CartList = ({ className }: { className?: string }) => {
    const { items } = useCart();

    return (
        <div className={cn("grid grid-cols-1 desktop:grid-cols-3 gap-x-12 gap-y-16", className)}>
            {items.map((item) => (
                <ProductHorizontalCard
                    key={item.hash}
                    item={item}
                />
            ))}
        </div>
    );
};
