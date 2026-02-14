'use client';

import { Header } from '@/widgets/Header';
import { Container } from '@/shared/ui/Container';
import { Main } from '@/shared/ui/Main';
import { Typography } from '@/shared/ui/Typography';
import { CartList } from '@/widgets/CartList/ui/CartList';
import { CartFooter } from '@/widgets/CartFooter/ui/CartFooter';
import { CartItem } from '@/entities/product/model/types';

interface CartPageProps {
    items: CartItem[];
    total: number;
}

export const CartPage = ({ items, total }: CartPageProps) => {
    const handleRemove = (id: string) => {
        console.log('Remove item:', id);
    };

    const handlePay = () => {
        console.log('Pay button clicked');
    };

    return (
        <div className="min-h-screen bg-surface">
            <Header />

            <Main>
                <Main.Section className="pb-[172px]">
                    <Container max="xl">
                        <Typography variant="hero" as="h1" className="mb-12">
                            Cart ({items.length})
                        </Typography>

                        <CartList items={items} onRemove={handleRemove} />
                    </Container>
                </Main.Section>
                <Main.Navigation>
                    <Container max="xl">
                        <CartFooter
                            total={total}
                            onPay={handlePay}
                        />
                    </Container>
                </Main.Navigation>
            </Main>
        </div>
    );
};
