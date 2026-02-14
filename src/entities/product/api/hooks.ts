import { useQuery } from '@tanstack/react-query';
import { getProducts, getProductDetail } from './client';
import { Product, ProductDetail } from '../model/types';
import { ApiError } from '@/shared/api/client';

export const useProducts = () => {
    return useQuery<Product[], ApiError>({
        queryKey: ['products'],
        queryFn: async () => {
            const products = await getProducts();
            const seen = new Set();
            return products.filter(product => {
                if (seen.has(product.id)) return false;
                seen.add(product.id);
                return true;
            });
        },
    });
};

export const useProductDetail = (id: string) => {
    return useQuery<ProductDetail, ApiError>({
        queryKey: ['product', id],
        queryFn: async () => {
            const product = await getProductDetail(id);
            const seen = new Set();
            product.similarProducts = product.similarProducts.filter(p => {
                if (seen.has(p.id)) return false;
                seen.add(p.id);
                return true;
            });
            return product;
        },
        enabled: !!id,
    });
};
