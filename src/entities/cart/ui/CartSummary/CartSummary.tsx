import { cn } from '@/shared/lib/utils';
interface CartSummaryProps {
    total: number;
    className?: string;
}

export const CartSummary = ({ total, className }: CartSummaryProps) => {
    return (
        <div className={cn(
            "flex gap-6 items-center w-full justify-between md:w-auto md:justify-start",
            className
        )}>
            <span className="text-md uppercase text-content-primary">Total</span>
            <span className="text-md uppercase text-content-primary">{total} eur</span>
        </div>
    );
};
