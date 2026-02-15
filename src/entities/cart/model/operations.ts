import { CartItem } from './types';

export const addItemToCart = (
  items: CartItem[],
  item: Omit<CartItem, 'hash'>,
): CartItem[] => {
  const newItem = {
    ...item,
    hash: crypto.randomUUID(),
  };
  return [...items, newItem];
};

export const removeItemFromCart = (
  items: CartItem[],
  hash: string,
): CartItem[] => {
  return items.filter((item) => item.hash !== hash);
};

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

export const calculateCartCount = (items: CartItem[]): number => {
  return items.length;
};
