import { useQuery } from '@tanstack/react-query';
import { getProducts, getProductDetail } from './client';
import { Product, ProductDetail, ProductSearchParams } from '../model/types';
import { ApiError } from '@/shared/api/client';
import { assignHashToProducts } from '../lib/utils';

export const useProducts = (params?: ProductSearchParams) => {
  return useQuery<Product[], ApiError>({
    queryKey: ['products', params],
    queryFn: async () => {
      const products = await getProducts(params);
      return assignHashToProducts(products);
    },
  });
};

export const useProductDetail = (id: string) => {
  return useQuery<ProductDetail, ApiError>({
    queryKey: ['product', id],
    queryFn: async () => {
      const product = await getProductDetail(id);
      product.similarProducts = assignHashToProducts(product.similarProducts);
      return product;
    },
    enabled: !!id,
  });
};
