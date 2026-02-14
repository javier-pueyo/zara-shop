import { apiClient } from '@/shared/api/client';
import { Product, ProductDetail } from '../model/types';

export const getProducts = async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>('/products');
    return response.data;
};

export const getProductDetail = async (id: string): Promise<ProductDetail> => {
    const response = await apiClient.get<ProductDetail>(`/products/${id}`);
    return response.data;
};
