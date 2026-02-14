import Link from 'next/link';
import { CartBadge } from '@/entities/cart';
import { Icon } from '@/shared/ui/Icon/Icon';

interface HeaderCartProps {
    count?: number;
}

export const HeaderCart = ({ count = 0 }: HeaderCartProps) => {
    return (
        <Link href="/cart" className="flex items-center gap-1">
            <Icon name={count > 0 ? 'bag-solid' : 'bag-outline'} className="text-content-primary" />
            <CartBadge count={count} />
        </Link>
    );
};
