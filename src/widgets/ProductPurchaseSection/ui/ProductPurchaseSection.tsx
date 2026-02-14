'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BadgeSelector } from '@/shared/ui/BadgeSelector/BadgeSelector';
import { ColorSelector } from '@/shared/ui/ColorSelector/ColorSelector';
import { Button } from '@/shared/ui/Button/Button';
import { ProductDetail } from '@/entities/product/model/types';
import { Media } from '@/shared/ui/Media';

interface ProductPurchaseSectionProps {
    product: ProductDetail;
}

export const ProductPurchaseSection = ({ product }: ProductPurchaseSectionProps) => {
    const [selectedColorName, setSelectedColorName] = useState<string>('');
    const [selectedStorageCapacity, setSelectedStorageCapacity] = useState<string>('');

    useEffect(() => {
        if (product.colorOptions.length > 0 && !selectedColorName) {
            setSelectedColorName(product.colorOptions[0].name);
        }
        if (product.storageOptions.length > 0 && !selectedStorageCapacity) {
            setSelectedStorageCapacity(product.storageOptions[0].capacity);
        }
    }, [product]);

    const colorOptions = product.colorOptions.map(color => ({
        hex: color.hexCode,
        label: color.name,
        value: color.name
    }));

    const storageOptions = product.storageOptions.map(opt => ({
        label: opt.capacity,
        value: opt.capacity
    }));

    const selectedColorOption = product.colorOptions.find(opt => opt.name === selectedColorName);
    const selectedColorImage = selectedColorOption?.imageUrl;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Added to cart:', { product, selectedColorName, selectedStorageCapacity });
    };

    const currentImage = selectedColorImage || product.imageUrl;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">
            {currentImage && (
                <Media
                    src={currentImage}
                    alt={product.name}
                    ratio="vertical"
                    fit="contain"
                    priority
                    className="p-12"
                />
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-16 lg:max-w-[360px] lg:ml-auto w-full">
                <div>
                    <h1 className="text-xl uppercase">{product.name}</h1>
                    <p className="text-xl mt-4">{product.basePrice} EUR</p>
                </div>

                <BadgeSelector
                    label="Storage. How much space do you need?"
                    options={storageOptions}
                    value={selectedStorageCapacity}
                    onSelect={setSelectedStorageCapacity}
                />

                <ColorSelector
                    label="Color. Pick your favourite"
                    colors={colorOptions}
                    value={selectedColorName}
                    onSelect={setSelectedColorName}
                />

                <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={!selectedColorName || !selectedStorageCapacity}
                >
                    Añadir
                </Button>
            </form>
        </div>
    );
};
