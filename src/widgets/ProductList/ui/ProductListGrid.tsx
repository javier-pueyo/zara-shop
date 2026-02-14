import { ProductCard } from '@/entities/product/ui/ProductCard/ProductCard';
import { Product } from '@/entities/product/model/types';

import { cn } from '@/shared/lib/utils';

interface ProductListGridProps {
    products: Product[];
    className?: string;
}

export const ProductListGrid = ({ products, className }: ProductListGridProps) => {
    if (products.length === 0) return null;

    return (
        <div className={cn("grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-5 border-t border-l border-ui-border-primary mt-12", className)}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    className="border-r border-b border-ui-border-primary"
                />
            ))}
        </div>
    );
};
