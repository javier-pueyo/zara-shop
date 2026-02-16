import { ProductCard } from '@/entities/product/ui/ProductCard/ProductCard';
import { Product } from '@/entities/product/model/types';
import { cn } from '@/shared/lib/utils';
import { Slider } from '@/shared/ui/Slider';
import { Typography } from '@/shared/ui/Typography';

interface SimilarItemsSliderProps {
  products: Product[];
  className?: string;
}

export const SimilarItemsSlider = ({
  products,
  className,
}: SimilarItemsSliderProps) => {
  return (
    <div className={cn('w-full', className)}>
      <Typography variant="title" as="h2">
        Similar Items
      </Typography>

      <Slider className="mt-10">
        <Slider.Content>
          {products.map((product) => (
            <Slider.Item key={product.id}>
              <ProductCard product={product} />
            </Slider.Item>
          ))}
        </Slider.Content>
        <Slider.Bar />
      </Slider>
    </div>
  );
};
