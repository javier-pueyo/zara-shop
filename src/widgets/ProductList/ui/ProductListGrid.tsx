import { ProductCard } from '@/entities/product/ui/ProductCard/ProductCard';
import { Product } from '@/entities/product/model/types';

import { cn } from '@/shared/lib/utils';

interface ProductListGridProps {
  products: Product[];
  className?: string;
}

export const ProductListGrid = ({
  products,
  className,
}: ProductListGridProps) => {
  if (products.length === 0) return null;

  return (
    <div
      className={cn(
        'tablet:grid-cols-2 desktop:grid-cols-5 border-ui-border-primary mt-12 grid grid-cols-1 border-t border-l',
        className,
      )}
    >
      {products.map((product) => (
        <ProductCard
          key={product.hash}
          product={product}
          className="border-ui-border-primary border-r border-b"
        />
      ))}
    </div>
  );
};
