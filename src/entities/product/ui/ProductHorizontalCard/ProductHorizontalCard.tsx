import { Media } from '@/shared/ui/Media/Media';
import { RemoveFromCartButton } from '@/features/RemoveFromCart';
import { CartItem } from '@/entities/cart';

interface ProductHorizontalCardProps {
    item: CartItem;
}

export const ProductHorizontalCard = ({
    item,
}: ProductHorizontalCardProps) => {
    const { id, productName, price, imageUrl, color, storage } = item;
    return (
        <div className="grid grid-cols-2 tablet:grid-cols-[30%_70%] desktop:grid-cols-[60%_40%] gap-10">
            <div>
                <Media
                    src={imageUrl}
                    alt={productName}
                    ratio="vertical"
                    fit="contain"
                />
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="text-xs uppercase text-content-primary">{productName}</h3>
                <p className="text-xs uppercase text-content-primary mt-1">{price} EUR</p>
                <p className="text-xs uppercase text-content-primary mt-5">
                    {storage} | {color}
                </p>
                <RemoveFromCartButton
                    hash={item.hash}
                    className="mt-auto w-fit"
                />
            </div>
        </div>
    );
};
