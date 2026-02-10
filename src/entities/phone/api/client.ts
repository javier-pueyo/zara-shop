import { apiClient } from '@/shared/api/client';
import { Phone, PhoneDetail } from '../model/types';

export const getPhones = async (): Promise<Phone[]> => {
  const response = await apiClient.get<Phone[]>('/products');
  return response.data;
};

export const getPhoneDetail = async (id: string): Promise<PhoneDetail> => {
  const response = await apiClient.get<PhoneDetail>(`/products/${id}`);
  return response.data;
};
