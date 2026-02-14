'use client';

import { Button } from '@/shared/ui/Button/Button';
import { useRouter } from 'next/navigation';
import { useCart } from '@/entities/cart';
import { cn } from '@/shared/lib/utils';
import { CartSummary } from '@/entities/cart/ui/CartSummary';

interface CartFooterProps {
    onPay: () => void;
    className?: string;
}

export const CartFooter = ({ onPay, className }: CartFooterProps) => {
    const router = useRouter();
    const { total } = useCart();

    return (
        <div className={cn("grid grid-cols-2 gap-x-3 gap-y-6 md:flex md:items-center md:gap-14", className)}>
            {total > 0 && (
                <CartSummary
                    total={total}
                    className="col-span-2 md:order-2 md:flex-1 md:justify-end"
                />
            )}

            <Button
                variant="secondary"
                onClick={() => router.push('/')}
                className={cn(
                    "md:order-1 w-full md:w-auto md:min-w-[260px]",
                    total > 0 ? "col-span-1" : "col-span-2"
                )}
            >
                Continue Shopping
            </Button>

            {total > 0 && (
                <Button
                    variant="primary"
                    onClick={onPay}
                    className="w-full col-span-1 md:order-3 md:w-auto md:min-w-[260px]"
                >
                    Pay
                </Button>
            )}
        </div>
    );
};
