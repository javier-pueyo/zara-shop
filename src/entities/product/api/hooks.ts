import { useQuery } from '@tanstack/react-query';
import { getProducts, getProductDetail } from './client';
import { Product, ProductDetail } from '../model/types';
import { ApiError } from '@/shared/api/client';
import { filterUniqueProducts } from '../lib/utils';

export const useProducts = () => {
    return useQuery<Product[], ApiError>({
        queryKey: ['products'],
        queryFn: async () => {
            const products = await getProducts();
            return filterUniqueProducts(products);
        },
    });
};

export const useProductDetail = (id: string) => {
    return useQuery<ProductDetail, ApiError>({
        queryKey: ['product', id],
        queryFn: async () => {
            const product = await getProductDetail(id);
            product.similarProducts = filterUniqueProducts(product.similarProducts);
            return product;
        },
        enabled: !!id,
    });
};
