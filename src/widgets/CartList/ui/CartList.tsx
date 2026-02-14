import { ProductHorizontalCard } from '@/entities/product/ui/ProductHorizontalCard/ProductHorizontalCard';
import { CartItem } from '@/entities/product/model/types';

interface CartListProps {
    items: CartItem[];
    onRemove: (id: string) => void;
}

export const CartList = ({ items, onRemove }: CartListProps) => {
    return (
        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-x-12 gap-y-16">
            {items.map((item) => (
                <ProductHorizontalCard
                    key={`${item.id}-${item.color}-${item.storage}`}
                    item={item}
                    onRemove={() => onRemove(item.id)}
                />
            ))}
        </div>
    );
};
