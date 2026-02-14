'use client';

import { Button } from '@/shared/ui/Button/Button';
import { CartSummary } from '@/entities/cart/ui/CartSummary/CartSummary';
import { useRouter } from 'next/navigation';

interface CartFooterProps {
    total: number;
    onPay: () => void;
}

export const CartFooter = ({ total, onPay }: CartFooterProps) => {
    const router = useRouter();

    return (
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:flex md:items-center md:gap-14">
            <CartSummary
                total={total}
                className="col-span-2 md:order-2 md:flex-1 md:justify-end"
            />

            <Button
                variant="secondary"
                onClick={() => router.push('/')}
                className="col-span-1 md:order-1 w-full md:w-auto md:min-w-[260px]"
            >
                Continue Shopping
            </Button>

            <Button
                variant="primary"
                onClick={onPay}
                className="w-full col-span-1 md:order-3 md:w-auto md:min-w-[260px]"
            >
                Pay
            </Button>
        </div>
    );
};
