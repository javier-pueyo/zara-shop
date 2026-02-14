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
        <div className={cn("w-full", className)}>
            <Typography variant="title" as="h2">Specifications</Typography>
            <div className="flex flex-col mt-10">
                {specEntries.map(([key, value]) => (
                    <div key={key} className="grid grid-cols-[40%_60%] py-4 border-b border-ui-border-primary first:border-t  items-center">
                        <span className="text-xs uppercase text-content-primary">
                            {key}
                        </span>
                        <span className="text-xs uppercase text-content-primary">
                            {value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
