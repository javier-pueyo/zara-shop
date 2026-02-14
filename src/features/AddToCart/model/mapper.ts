import { CartItem } from '@/entities/cart/model/types';
import { ProductDetail } from '@/entities/product/model/types';

export const mapProductToCartItem = (
    product: ProductDetail,
    color: string,
    storage: string
): Omit<CartItem, 'hash'> | null => {
    if (!color || !storage) return null;

    const selectedColorOption = product.colorOptions.find(opt => opt.name === color);
    const imageUrl = selectedColorOption?.imageUrl || product.imageUrl;

    return {
        id: product.id,
        productName: product.name,
        brand: product.brand,
        price: product.basePrice,
        imageUrl: imageUrl,
        color: color,
        storage: storage,
    };
};
