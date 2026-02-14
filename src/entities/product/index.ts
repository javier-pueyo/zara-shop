// Public API (Entry point) for the Product entity
// According to FSD, this is the only way other slices should interact with this entity

// UI Components
export { ProductCard } from './ui/ProductCard/ProductCard';
export { ProductHorizontalCard } from './ui/ProductHorizontalCard/ProductHorizontalCard';
export { ProductSpecs } from './ui/ProductSpecs/ProductSpecs';

// API Hooks
export { useProducts, useProductDetail } from './api/hooks';

// Model Types
export type { Product, ProductDetail, CartItem, ColorOption, StorageOption } from './model/types';
