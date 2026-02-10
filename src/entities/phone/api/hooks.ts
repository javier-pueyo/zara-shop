import { useQuery } from '@tanstack/react-query';
import { getPhones, getPhoneDetail } from './client';
import { Phone, PhoneDetail } from '../model/types';

export const usePhones = () => {
  return useQuery<Phone[], Error>({
    queryKey: ['phones'],
    queryFn: getPhones,
  });
};

export const usePhoneDetail = (id: string) => {
  return useQuery<PhoneDetail, Error>({
    queryKey: ['phone', id],
    queryFn: () => getPhoneDetail(id),
    enabled: !!id,
  });
};
