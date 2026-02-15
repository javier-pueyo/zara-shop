import { ProductDetail } from '../../model/types';
import { Typography } from '@/shared/ui/Typography';
import { cn } from '@/shared/lib/utils';

interface ProductSpecsProps {
  specs: Record<string, string>;
  className?: string;
}

export const ProductSpecs = ({ specs, className }: ProductSpecsProps) => {
  const specEntries = Object.entries(specs);
  return (
    <div className={cn('w-full', className)}>
      <Typography variant="title" as="h2">
        Specifications
      </Typography>
      <div className="mt-10 flex flex-col">
        {specEntries.map(([key, value]) => (
          <div
            key={key}
            className="border-ui-border-primary grid grid-cols-[40%_60%] items-center border-b py-4 first:border-t"
          >
            <span className="text-content-primary text-xs uppercase">
              {key}
            </span>
            <span className="text-content-primary text-xs uppercase">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
