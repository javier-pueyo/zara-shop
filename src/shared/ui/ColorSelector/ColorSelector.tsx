import { RadioGroup, Radio, Field, Label } from '@headlessui/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ColorOption {
  hex: string;
  label: string;
  value: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  value?: string;
  onSelect: (value: string) => void;
  label?: string;
}

export const ColorSelector = ({
  colors,
  value,
  onSelect,
  label,
}: ColorSelectorProps) => {
  const selectedValue = colors.find((c) => c.value === value);

  return (
    <Field className="flex flex-col gap-6">
      {label && (
        <Label className="text-content-primary text-sm uppercase">
          {label}
        </Label>
      )}
      <div className="relative mb-6 flex flex-col gap-4">
        <RadioGroup
          value={value}
          onChange={onSelect}
          className="flex flex-wrap gap-4"
        >
          {colors.map((color) => (
            <Radio
              key={color.value}
              value={color.value}
              aria-label={color.label}
              className={({ checked }) =>
                cn(
                  'h-8 w-8 cursor-pointer border-1 p-0.5 transition-colors',
                  checked
                    ? 'border-ui-border-primary'
                    : 'border-ui-border-secondary hover:border-ui-border-primary',
                )
              }
            >
              <div
                className="h-full w-full border border-neutral-100"
                style={{ backgroundColor: color.hex }}
              />
            </Radio>
          ))}
        </RadioGroup>
        {selectedValue && (
          <span className="text-content-primary absolute -bottom-6 left-0 text-xs">
            {selectedValue.label}
          </span>
        )}
      </div>
    </Field>
  );
};
