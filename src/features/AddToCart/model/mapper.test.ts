import { describe, it, expect } from 'vitest';
import { mapProductToCartItem } from './mapper';
import { ProductDetail } from '@/entities/product/model/types';

const MOCK_PRODUCT: ProductDetail = {
  id: '1',
  brand: 'Test Brand',
  name: 'Test Phone',
  basePrice: 1000,
  imageUrl: 'default.jpg',
  description: 'Test Description',
  rating: 5,
  specs: {
    screen: '6.1',
    resolution: '1080p',
    processor: 'A15',
    mainCamera: '12MP',
    selfieCamera: '12MP',
    battery: '3000mAh',
    os: 'iOS',
    screenRefreshRate: '60Hz',
  },
  colorOptions: [
    { name: 'Black', hexCode: '#000', imageUrl: 'black.jpg' },
    { name: 'White', hexCode: '#fff', imageUrl: 'white.jpg' },
  ],
  storageOptions: [],
  similarProducts: [],
};

describe('mapProductToCartItem', () => {
  it('should map product to cart item with specific color image', () => {
    const item = mapProductToCartItem(MOCK_PRODUCT, 'Black', '128GB');

    expect(item).not.toBeNull();
    expect(item).toMatchObject({
      id: MOCK_PRODUCT.id,
      productName: MOCK_PRODUCT.name,
      brand: MOCK_PRODUCT.brand,
      price: MOCK_PRODUCT.basePrice,
      color: 'Black',
      storage: '128GB',
      imageUrl: 'black.jpg', // specific color image
    });
  });

  it('should fall back to default image if color option not found', () => {
    const item = mapProductToCartItem(MOCK_PRODUCT, 'Red', '128GB');

    expect(item).not.toBeNull();
    expect(item?.imageUrl).toBe('default.jpg');
  });

  it('should return null if color or storage is missing', () => {
    expect(mapProductToCartItem(MOCK_PRODUCT, '', '128GB')).toBeNull();
    expect(mapProductToCartItem(MOCK_PRODUCT, 'Black', '')).toBeNull();
  });
});
