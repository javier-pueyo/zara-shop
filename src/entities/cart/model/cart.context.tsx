'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from './types';
import { loadCart, saveCart } from '../lib/persistence';

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
        const newItem = { ...item, hash: crypto.randomUUID() };
        const newItems = [...items, newItem];
        setItems(newItems);
        saveCart(newItems);
    };

    const removeItem = (hash: string) => {
        const newItems = items.filter(
            item => item.hash !== hash
        );
        setItems(newItems);
        saveCart(newItems);
    };

    const total = items.reduce((sum, item) => sum + item.price, 0);
    const count = items.length;

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
