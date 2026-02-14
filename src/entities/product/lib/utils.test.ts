import { describe, it, expect } from 'vitest';
import { filterUniqueProducts } from './utils';

describe('filterUniqueProducts', () => {
    it('should remove duplicate products by id', () => {
        const products = [
            { id: '1', name: 'A' },
            { id: '2', name: 'B' },
            { id: '1', name: 'A (Duplicate)' },
        ];

        const unique = filterUniqueProducts(products);

        expect(unique).toHaveLength(2);
        expect(unique[0].id).toBe('1');
        expect(unique[1].id).toBe('2');
        expect(unique[0].name).toBe('A'); // Keeps the first occurrence
    });

    it('should return empty array for empty input', () => {
        expect(filterUniqueProducts([])).toEqual([]);
    });

    it('should handle array with no duplicates', () => {
        const products = [
            { id: '1', name: 'A' },
            { id: '2', name: 'B' },
        ];
        expect(filterUniqueProducts(products)).toHaveLength(2);
    });
});
