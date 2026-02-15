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
                "group cursor-pointer p-4 transition-all duration-500 flex flex-col h-full",
                "bg-gradient-to-t from-brand-primary to-brand-primary bg-[length:100%_0%] bg-bottom bg-no-repeat hover:bg-[length:100%_100%]",
                className
            )}
        >
            {imageUrl && (
                <div className="relative z-10 transition-all duration-500">
                    <Media
                        src={imageUrl}
                        alt={`${brand} ${name}`}
                        ratio="horizontal"
                        fit="contain"
                        imageClassName="transition-opacity duration-500"
                    />
                </div>
            )}
            <div className='mt-6 relative z-10'>
                <p className="text-2xs uppercase text-content-secondary transition-colors duration-500 group-hover:text-content-inverse">
                    {brand}
                </p>
                <div className="flex justify-between gap-2 mt-1 transition-colors duration-500 group-hover:text-content-inverse">
                    <h3 className="text-xs uppercase">{name}</h3>
                    <p className="text-xs font-medium">{basePrice} EUR</p>
                </div>
            </div>
        </Link>
    );
};
