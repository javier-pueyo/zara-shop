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
        <Link
            href={`/product/${id}`}
            className={cn(
                'group flex h-full cursor-pointer flex-col p-4 transition-all duration-500',
                'from-brand-primary to-brand-primary bg-gradient-to-t bg-[length:100%_0%] bg-bottom bg-no-repeat hover:bg-[length:100%_100%]',
                className,
            )}
        >
            {imageUrl && (
                <div className="relative z-base transition-all duration-500">
                    <Media
                        src={imageUrl}
                        alt={`${brand} ${name}`}
                        ratio="horizontal"
                        fit="contain"
                        imageClassName="transition-opacity duration-500"
                    />
                </div>
            )}
            <div className="relative z-base mt-6">
                <p className="text-2xs text-content-secondary group-hover:text-content-inverse uppercase transition-colors duration-500">
                    {brand}
                </p>
                <div className="group-hover:text-content-inverse mt-1 flex justify-between gap-2 transition-colors duration-500">
                    <h3 className="text-xs uppercase">{name}</h3>
                    <p className="text-xs font-medium">{basePrice} EUR</p>
                </div>
            </div>
        </Link>
    );
};
