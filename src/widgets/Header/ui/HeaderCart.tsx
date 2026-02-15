import Link from 'next/link';
import { useCart, CartBadge } from '@/entities/cart';
import { Icon } from '@/shared/ui/Icon/Icon';

export const HeaderCart = () => {
  const { count, isHydrated } = useCart();
  return (
    <Link href="/cart" className="flex items-center gap-1">
      <Icon
        name={count > 0 ? 'bag-solid' : 'bag-outline'}
        className="text-content-primary"
      />
      {isHydrated && <CartBadge count={count} />}
    </Link>
  );
};
