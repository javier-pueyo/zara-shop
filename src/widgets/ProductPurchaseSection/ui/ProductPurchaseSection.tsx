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

export const ProductPurchaseSection = ({
  product,
  className,
}: ProductPurchaseSectionProps) => {
  const [selectedColorName, setSelectedColorName] = useState<string>('');
  const [selectedStorageCapacity, setSelectedStorageCapacity] =
    useState<string>('');

  const selectedColorOption = product.colorOptions.find(
    (opt) => opt.name === selectedColorName,
  );
  const selectedColorImage = selectedColorOption?.imageUrl;
  const currentImage = selectedColorImage ?? product.colorOptions[0]?.imageUrl;
  const [lastImage, setLastImage] = useState<string | null>(currentImage);

  /**
   * Updates the last image state after a delay to allow for fade-in animation.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLastImage(currentImage);
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentImage]);

  const { addToCart } = useAddToCart(product);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedColorName && selectedStorageCapacity) {
      addToCart(selectedColorName, selectedStorageCapacity);
    }
  };

  return (
    <div
      className={cn(
        'tablet:grid-cols-[40%_60%] grid grid-cols-1 items-center gap-12',
        className,
      )}
    >
      <div className="relative flex justify-center">
        {lastImage && lastImage !== currentImage && (
          <Media
            src={lastImage}
            alt={product.name}
            ratio="vertical"
            fit="contain"
            className="tablet:w-full absolute inset-0 w-[70%]"
          />
        )}
        {currentImage && (
          <Media
            key={currentImage}
            src={currentImage}
            alt={product.name}
            ratio="vertical"
            fit="contain"
            priority
            className="tablet:w-full relative z-base w-[70%] animate-fade-in"
          />
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="desktop:gap-16 tablet:max-w-[360px] tablet:ml-auto flex w-full flex-col gap-10"
      >
        <div>
          <h1 className="text-xl uppercase">{product.name}</h1>
          <p className="mt-4 text-lg">{product.basePrice} EUR</p>
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
