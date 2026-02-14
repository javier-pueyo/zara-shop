import { describe, it, expect } from 'vitest';
import { assignHashToProducts } from './utils';

describe('assignHashToProducts', () => {
    it('should assign a unique hash to each product, including duplicates', () => {
        const products = [
            { id: '1', name: 'A' },
            { id: '2', name: 'B' },
            { id: '1', name: 'A (Duplicate)' },
        ];

        const hashedProducts = assignHashToProducts(products);

        expect(hashedProducts).toHaveLength(3);
        hashedProducts.forEach(product => {
            expect(product).toHaveProperty('hash');
            expect(typeof product.hash).toBe('string');
            expect(product.hash).toContain(product.id);
        });

        // Ensure uniqueness
        const hashes = hashedProducts.map(p => p.hash);
        const uniqueHashes = new Set(hashes);
        expect(uniqueHashes.size).toBe(3);
    });

    it('should return empty array for empty input', () => {
        expect(assignHashToProducts([])).toEqual([]);
    });

    it('should handle array with single item', () => {
        const products = [{ id: '1', name: 'A' }];
        const hashed = assignHashToProducts(products);
        expect(hashed).toHaveLength(1);
        expect(hashed[0].hash).toContain('1');
    });
});
