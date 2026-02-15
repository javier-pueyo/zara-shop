'use client';

import { Header } from '@/widgets/Header';
import { Container } from '@/shared/ui/Container';
import { Main } from '@/shared/ui/Main';
import { Typography } from '@/shared/ui/Typography';
import { CartList } from '@/widgets/CartList/ui/CartList';
import { CartFooter } from '@/widgets/CartFooter/ui/CartFooter';
import { useCart } from '@/entities/cart';

export const CartPage = () => {
  const { items, isHydrated } = useCart();

  const handlePay = () => {
    // TODO: Implement pay logic
    console.log('Pay button clicked');
  };

  return (
    <div className="bg-surface min-h-screen">
      <Header />

      <Main>
        <Main.Section className="pb-[172px]">
          <Container max="xl">
            <Typography variant="hero" as="h1" className="mb-12">
              Cart {isHydrated && `(${items.length})`}
            </Typography>

            <CartList />
          </Container>
        </Main.Section>
        <Main.Navigation>
          <Container max="xl">
            <CartFooter onPay={handlePay} />
          </Container>
        </Main.Navigation>
      </Main>
    </div>
  );
};
