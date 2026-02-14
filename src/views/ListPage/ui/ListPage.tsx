'use client';

import { Header } from '@/widgets/Header';
import { Container } from '@/shared/ui/Container';
import { Main } from '@/shared/ui/Main';
import { SearchBar } from '@/features/SearchBar';
import { useProducts } from '@/entities/product';
import { ProductListGrid } from '@/widgets/ProductList/ui/ProductListGrid';
import { useState, useMemo } from 'react';

export const ListPage = () => {
    const { data: products = [], isLoading, isError, error } = useProducts();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = useMemo(() => {
        return products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [products, searchQuery]);


    return (
        <div className="min-h-screen bg-surface">
            <Header>
                <Header.Cart />
            </Header>

            <Main>
                <Main.Section>
                    <Container max="xl">
                        <SearchBar onSearch={setSearchQuery} resultsCount={isLoading ? undefined : filteredProducts.length} />
                        {filteredProducts.length > 0 &&
                            <ProductListGrid products={filteredProducts} />
                        }
                    </Container>
                </Main.Section>
            </Main>
        </div>
    );
};
