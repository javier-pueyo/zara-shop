import { describe, it, expect } from 'vitest';
import {
  addItemToCart,
  calculateCartCount,
  calculateCartTotal,
  removeItemFromCart,
} from './operations';
import { CartItem } from './types';

const MOCK_ITEM = {
  id: '1',
  productName: 'Test Phone',
  brand: 'Test Brand',
  price: 100,
  imageUrl: 'test.jpg',
  color: 'Black',
  storage: '128GB',
} as const;

describe('Cart Operations', () => {
  describe('addItemToCart', () => {
    it('should add item with a new hash', () => {
      const items: CartItem[] = [];
      const newItems = addItemToCart(items, MOCK_ITEM);

      expect(newItems).toHaveLength(1);
      expect(newItems[0]).toMatchObject(MOCK_ITEM);
      expect(newItems[0]).toHaveProperty('hash');
      expect(typeof newItems[0].hash).toBe('string');
      expect(newItems[0].hash.length).toBeGreaterThan(0);
    });

    it('should append to existing items', () => {
      const existingItem = { ...MOCK_ITEM, hash: 'hash-1' };
      const items = [existingItem];
      const newItems = addItemToCart(items, MOCK_ITEM);

      expect(newItems).toHaveLength(2);
      expect(newItems[0]).toEqual(existingItem);
      expect(newItems[1]).toMatchObject(MOCK_ITEM);
      expect(newItems[1].hash).not.toBe(existingItem.hash);
    });
  });

  describe('removeItemFromCart', () => {
    it('should remove item by hash', () => {
      const item1 = { ...MOCK_ITEM, hash: 'hash-1' };
      const item2 = { ...MOCK_ITEM, hash: 'hash-2' };
      const items = [item1, item2];

      const newItems = removeItemFromCart(items, 'hash-1');

      expect(newItems).toHaveLength(1);
      expect(newItems[0]).toEqual(item2);
    });

    it('should return same array if hash not found (conceptually, though filter returns new array)', () => {
      // Note: filter always returns a new array reference, but content should match
      const item1 = { ...MOCK_ITEM, hash: 'hash-1' };
      const items = [item1];

      const newItems = removeItemFromCart(items, 'hash-999');

      expect(newItems).toHaveLength(1);
      expect(newItems[0]).toEqual(item1);
    });
  });

  describe('calculateCartTotal', () => {
    it('should sum up prices', () => {
      const items = [
        { ...MOCK_ITEM, price: 100, hash: '1' },
        { ...MOCK_ITEM, price: 50, hash: '2' },
      ];
      expect(calculateCartTotal(items)).toBe(150);
    });

    it('should return 0 for empty cart', () => {
      expect(calculateCartTotal([])).toBe(0);
    });
  });

  describe('calculateCartCount', () => {
    it('should return number of items', () => {
      const items = [
        { ...MOCK_ITEM, hash: '1' },
        { ...MOCK_ITEM, hash: '2' },
      ];
      expect(calculateCartCount(items)).toBe(2);
    });

    it('should return 0 for empty cart', () => {
      expect(calculateCartCount([])).toBe(0);
    });
  });
});
