import { useCart } from '@/entities/cart';
import { ProductDetail } from '@/entities/product/model/types';
import { mapProductToCartItem } from './mapper';

export const useAddToCart = (product: ProductDetail) => {
  const { addItem } = useCart();

  const addToCart = (color: string, storage: string) => {
    const item = mapProductToCartItem(product, color, storage);
    if (!item) return;

    addItem(item);
  };

  return { addToCart };
};
