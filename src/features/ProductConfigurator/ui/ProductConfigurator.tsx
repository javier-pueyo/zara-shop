'use client';

import { BadgeSelector } from '@/shared/ui/BadgeSelector/BadgeSelector';
import { ColorSelector } from '@/shared/ui/ColorSelector/ColorSelector';
import { ProductDetail } from '@/entities/product/model/types';

interface ProductConfiguratorProps {
  product: ProductDetail;
  selectedColor: string;
  selectedStorage: string;
  onColorSelect: (color: string) => void;
  onStorageSelect: (storage: string) => void;
  className?: string;
}

export const ProductConfigurator = ({
  product,
  selectedColor,
  selectedStorage,
  onColorSelect,
  onStorageSelect,
  className,
}: ProductConfiguratorProps) => {
  const colorOptions = product.colorOptions.map((color) => ({
    hex: color.hexCode,
    label: color.name,
    value: color.name,
  }));

  const storageOptions = product.storageOptions.map((opt) => ({
    label: opt.capacity,
    value: opt.capacity,
  }));

  return (
    <div className={className}>
      <div className="desktop:gap-10 flex flex-col gap-8">
        <BadgeSelector
          label="Storage. How much space do you need?"
          options={storageOptions}
          value={selectedStorage}
          onSelect={onStorageSelect}
        />

        <ColorSelector
          label="Color. Pick your favourite"
          colors={colorOptions}
          value={selectedColor}
          onSelect={onColorSelect}
        />
      </div>
    </div>
  );
};
