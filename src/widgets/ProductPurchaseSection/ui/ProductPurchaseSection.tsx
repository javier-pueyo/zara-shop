'use client';

import { useState, useEffect } from 'react';
import { ProductDetail } from '@/entities/product/model/types';
import { Media } from '@/shared/ui/Media';

import { ProductConfigurator } from '@/features/ProductConfigurator';
import { useAddToCart, AddToCartButton } from '@/features/AddToCart';

import { cn } from '@/shared/lib/utils';

interface ProductPurchaseSectionProps {
    product: ProductDetail;
    className?: string;
}

export const ProductPurchaseSection = ({ product, className }: ProductPurchaseSectionProps) => {
    const [selectedColorName, setSelectedColorName] = useState<string>('');
    const [selectedStorageCapacity, setSelectedStorageCapacity] = useState<string>('');

    useEffect(() => {
        if (product.colorOptions.length > 0 && !selectedColorName) {
            setSelectedColorName(product.colorOptions[0].name);
        }
        if (product.storageOptions.length > 0 && !selectedStorageCapacity) {
            setSelectedStorageCapacity(product.storageOptions[0].capacity);
        }
    }, [product, selectedColorName, selectedStorageCapacity]);

    const selectedColorOption = product.colorOptions.find(opt => opt.name === selectedColorName);
    const selectedColorImage = selectedColorOption?.imageUrl;
    const currentImage = selectedColorImage || product.imageUrl;

    const { addToCart } = useAddToCart(product);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedColorName && selectedStorageCapacity) {
            addToCart(selectedColorName, selectedStorageCapacity);
        }
    };

    return (
        <div className={cn("grid grid-cols-1 tablet:grid-cols-[40%_60%] gap-12 items-center", className)}>
            {currentImage && (
                <Media
                    src={currentImage}
                    alt={product.name}
                    ratio="vertical"
                    fit="contain"
                    priority
                    className="w-[70%] tablet:w-full"
                />
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-10 desktop:gap-16  tablet:max-w-[360px] tablet:ml-auto w-full">
                <div>
                    <h1 className="text-xl uppercase">{product.name}</h1>
                    <p className="text-lg mt-4">{product.basePrice} EUR</p>
                </div>

                <ProductConfigurator
                    product={product}
                    selectedColor={selectedColorName}
                    selectedStorage={selectedStorageCapacity}
                    onColorSelect={setSelectedColorName}
                    onStorageSelect={setSelectedStorageCapacity}
                />

                <AddToCartButton
                    disabled={!selectedColorName || !selectedStorageCapacity}
                    className="w-full"
                />
            </form>
        </div>
    );
};
