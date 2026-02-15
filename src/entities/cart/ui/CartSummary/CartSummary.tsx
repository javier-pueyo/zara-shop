import { cn } from '@/shared/lib/utils';
interface CartSummaryProps {
  total: number;
  className?: string;
}

export const CartSummary = ({ total, className }: CartSummaryProps) => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-between gap-6 md:w-auto md:justify-start',
        className,
      )}
    >
      <span className="text-md text-content-primary uppercase">Total</span>
      <span className="text-md text-content-primary uppercase">
        {total} eur
      </span>
    </div>
  );
};
