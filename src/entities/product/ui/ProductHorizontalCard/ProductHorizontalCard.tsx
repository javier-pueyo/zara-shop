import { Media } from '@/shared/ui/Media/Media';
import { CartItem } from '../../model/types';
import { Button } from '@/shared/ui/Button/Button';

interface ProductHorizontalCardProps {
    item: CartItem;
    onRemove?: () => void;
}

export const ProductHorizontalCard = ({
    item,
    onRemove
}: ProductHorizontalCardProps) => {
    const { name, price, imageUrl, color, storage } = item;
    return (
        <div className="grid grid-cols-2 gap-10">
            <div>
                <Media
                    src={imageUrl}
                    alt={name}
                    ratio="vertical"
                />
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="text-xs uppercase text-content-primary">{name}</h3>
                <p className="text-xs uppercase text-content-primary mt-1">{price} EUR</p>
                <p className="text-xs uppercase text-content-primary mt-5">
                    {storage} | {color}
                </p>
                <Button
                    variant="plain"
                    onClick={onRemove}
                    className="mt-auto text-xs text-content-danger"
                >
                    Eliminar
                </Button>
            </div>
        </div>
    );
};
