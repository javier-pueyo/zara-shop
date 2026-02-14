import { apiClient } from '@/shared/api/client';
import { Product, ProductDetail, ProductSearchParams } from '../model/types';

export const getProducts = async (params?: ProductSearchParams): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>('/products', { params });
    return response.data;
};

export const getProductDetail = async (id: string): Promise<ProductDetail> => {
    const response = await apiClient.get<ProductDetail>(`/products/${id}`);
    return response.data;
};
