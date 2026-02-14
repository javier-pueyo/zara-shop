'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from './types';
import { loadCart, saveCart } from '../lib/persistence';
import { addItemToCart, calculateCartCount, calculateCartTotal, removeItemFromCart } from './operations';

interface CartContextType {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'hash'>) => void;
    removeItem: (hash: string) => void;
    total: number;
    count: number;
    isHydrated: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setItems(loadCart());
        setIsHydrated(true);
    }, []);

    const addItem = (item: Omit<CartItem, 'hash'>) => {
        const newItems = addItemToCart(items, item);
        setItems(newItems);
        saveCart(newItems);
    };

    const removeItem = (hash: string) => {
        const newItems = removeItemFromCart(items, hash);
        setItems(newItems);
        saveCart(newItems);
    };

    const total = calculateCartTotal(items);
    const count = calculateCartCount(items);

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, total, count, isHydrated }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
