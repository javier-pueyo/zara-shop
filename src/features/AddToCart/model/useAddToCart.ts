import { useCart } from '@/entities/cart';
import { ProductDetail } from '@/entities/product/model/types';

export const useAddToCart = (product: ProductDetail) => {
    const { addItem } = useCart();

    const addToCart = (color: string, storage: string) => {
        if (!color || !storage) return;

        const selectedColorOption = product.colorOptions.find(opt => opt.name === color);
        const imageUrl = selectedColorOption?.imageUrl || product.imageUrl;

        addItem({
            id: product.id,
            productName: product.name,
            brand: product.brand,
            price: product.basePrice,
            imageUrl: imageUrl,
            color: color,
            storage: storage,
        });
    };

    return { addToCart };
};
