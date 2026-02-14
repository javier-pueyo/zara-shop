import { CartItem } from '../model/types';

const STORAGE_KEY = 'zara_cart';

export const saveCart = (items: CartItem[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
};

export const loadCart = (): CartItem[] => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return [];

        const items = JSON.parse(saved);
        return items.map((item: any) => ({
            ...item,
            hash: item.hash || item.cartItemId || crypto.randomUUID()
        }));
    }
    return [];
};
