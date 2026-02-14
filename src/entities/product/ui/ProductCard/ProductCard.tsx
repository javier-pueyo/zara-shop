import Link from 'next/link';
import { Product } from '../../model/types';
import { Media } from '@/shared/ui/Media';
import { cn } from '@/shared/lib/utils';

interface ProductCardProps {
    product: Product;
    className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
    const { id, name, brand, basePrice, imageUrl } = product;
    return (
        <Link href={`/product/${id}`} className={cn("group cursor-pointer p-4", className)}>
            {imageUrl && (
                <Media
                    src={imageUrl}
                    alt={`${brand} ${name}`}
                    ratio="horizontal"
                    fit="contain"
                    multiply
                />
            )}
            <div className='mt-6'>
                <p className="text-2xs uppercase text-content-secondary">{brand}</p>
                <div className="flex justify-between gap-2 mt-1">
                    <h3 className="text-xs uppercase">{name}</h3>
                    <p className="text-xs font-medium">{basePrice} EUR</p>
                </div>
            </div>
        </Link>
    );
};
