'use client';

import { Header } from '@/widgets/Header';
import { Container } from '@/shared/ui/Container';
import { Main } from '@/shared/ui/Main';
import { SearchBar } from '@/features/SearchBar';
import { useProducts } from '@/entities/product';
import { ProductListGrid } from '@/widgets/ProductList/ui/ProductListGrid';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

export const ListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch] = useDebounce(searchQuery, 300);

  const { data: products = [], isLoading } = useProducts({
    search: debouncedSearch,
    limit: 20,
    offset: 0,
  });

  return (
    <div className="bg-surface min-h-screen">
      <Header>
        <Header.Cart />
      </Header>

      <Main>
        <Main.Section>
          <Container max="xl">
            <SearchBar
              onSearch={setSearchQuery}
              resultsCount={isLoading ? undefined : products.length}
            />
            {products.length > 0 && <ProductListGrid products={products} />}
          </Container>
        </Main.Section>
      </Main>
    </div>
  );
};
