import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { saveCart, loadCart } from './persistence';
import { CartItem } from '../model/types';

const MOCK_ITEM = {
    id: '1',
    productName: 'Test Phone',
    brand: 'Test Brand',
    price: 100,
    imageUrl: 'test.jpg',
    color: 'Black',
    storage: '128GB',
} as const;

describe('Cart Persistence', () => {
    beforeEach(() => {
        // Clear localStorage before each test
        localStorage.clear();
        vi.clearAllMocks();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should save items to localStorage', () => {
        const items: CartItem[] = [
            { ...MOCK_ITEM, hash: 'hash-1' }
        ];

        saveCart(items);

        const saved = localStorage.getItem('zara_cart');
        expect(saved).toBeDefined();
        expect(JSON.parse(saved!)).toEqual(items);
    });

    it('should load items from localStorage', () => {
        const items = [{ ...MOCK_ITEM, hash: 'hash-1' }];
        localStorage.setItem('zara_cart', JSON.stringify(items));

        const loaded = loadCart();
        expect(loaded).toEqual(items);
    });

    it('should return empty array if no data in localStorage', () => {
        const loaded = loadCart();
        expect(loaded).toEqual([]);
    });

    it('should not throw error if accessed outside window (SSR check)', () => {
        // Mock window as undefined to simulate SSR
        // Note: In jsdom environment window is defined, so we rely on the implementation check
        // Ideally we would run this in a node environment, but for now we trust the type check logic
        // or we could spy on window, but let's test the happy path mainly.
        const originalWindow = global.window;
        // @ts-ignore
        delete global.window;

        expect(() => saveCart([])).not.toThrow();
        expect(loadCart()).toEqual([]);

        global.window = originalWindow;
    });

    it('should assign a new hash if missing', () => {
        const legacyItem = { ...MOCK_ITEM }; // No hash
        localStorage.setItem('zara_cart', JSON.stringify([legacyItem]));

        const loaded = loadCart();

        expect(loaded).toHaveLength(1);
        expect(loaded[0]).toHaveProperty('hash');
        expect(typeof loaded[0].hash).toBe('string');
        expect(loaded[0].hash.length).toBeGreaterThan(0);
    });
});
