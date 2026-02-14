import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Home from './page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from '@/entities/cart';

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Mock the useProducts hook
vi.mock('@/entities/product', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/entities/product')>();
  return {
    ...actual,
    useProducts: () => ({
      data: [
        {
          id: '1',
          brand: 'TestBrand',
          name: 'TestPhone',
          basePrice: 1000,
          imageUrl: '/test.png',
          colorOptions: [],
          storageOptions: [],
          similarProducts: [],
          specs: {}
        }
      ],
      isLoading: false,
      isError: false,
    }),
  };
});

describe('Home', () => {
  it('renders the main layout structure (Smoke Test)', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Home />
        </CartProvider>
      </QueryClientProvider>
    );

    // Smoke Test: This confirms the app shell (providers + main layout) is mounting correctly
    // by checking for the existence of a core element like the search bar.
    expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument();
  });
});
