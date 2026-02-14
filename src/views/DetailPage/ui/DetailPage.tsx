'use client';

import { useProductDetail } from '@/entities/product';
import { ProductSpecs } from '@/entities/product/ui/ProductSpecs/ProductSpecs';
import { Button } from '@/shared/ui/Button/Button';
import { Container } from '@/shared/ui/Container';
import { Main } from '@/shared/ui/Main';
import { Header } from '@/widgets/Header';
import { ProductPurchaseSection } from '@/widgets/ProductPurchaseSection/ui/ProductPurchaseSection';
import { SimilarItemsSlider } from '@/widgets/SimilarItemsSlider/ui/SimilarItemsSlider';
import { useRouter } from 'next/navigation';

interface DetailPageProps {
    id: string;
}

export const DetailPage = ({ id }: DetailPageProps) => {
    const router = useRouter();
    const { data: product, isLoading, isError, error } = useProductDetail(id);

    if (!product) return null;

    return (
        <div className="min-h-screen bg-surface overflow-hidden">
            <Header>
                <Header.Cart />
            </Header>
            <Main>
                <Main.TopBar>
                    <Button className="py-3 uppercase text-xs" variant="plain" onClick={() => router.back()}>
                        <Button.Icon name="arrow-left" />
                        Back
                    </Button>
                </Main.TopBar>
                <Main.Section>
                    <Container max="lg" className="space-y-20 desktop:space-y-40 ">
                        <ProductPurchaseSection product={product} />
                        <ProductSpecs specs={product.specs} />
                        <SimilarItemsSlider products={product.similarProducts} />
                    </Container>
                </Main.Section>
            </Main>

        </div >
    );
};
