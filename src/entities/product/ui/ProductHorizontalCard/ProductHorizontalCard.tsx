import { Media } from '@/shared/ui/Media/Media';
import { RemoveFromCartButton } from '@/features/RemoveFromCart';
import { CartItem } from '@/entities/cart';

interface ProductHorizontalCardProps {
  item: CartItem;
}

export const ProductHorizontalCard = ({ item }: ProductHorizontalCardProps) => {
  const { id, productName, price, imageUrl, color, storage } = item;
  return (
    <div className="tablet:grid-cols-[30%_70%] desktop:grid-cols-[60%_40%] grid grid-cols-2 gap-10">
      <div>
        <Media
          src={imageUrl}
          alt={productName}
          ratio="vertical"
          fit="contain"
        />
      </div>
      <div className="flex flex-col py-10">
        <h3 className="text-content-primary text-xs uppercase">
          {productName}
        </h3>
        <p className="text-content-primary mt-1 text-xs uppercase">
          {price} EUR
        </p>
        <p className="text-content-primary mt-5 text-xs uppercase">
          {storage} | {color}
        </p>
        <RemoveFromCartButton hash={item.hash} className="mt-auto w-fit" />
      </div>
    </div>
  );
};
