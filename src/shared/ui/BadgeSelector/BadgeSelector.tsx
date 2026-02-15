import { RadioGroup, Radio, Field, Label } from '@headlessui/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeOption {
  label: string;
  value: string;
}

interface BadgeSelectorProps {
  options: BadgeOption[];
  value?: string;
  onSelect: (option: string) => void;
  label?: string;
}

export const BadgeSelector = ({
  options,
  value,
  onSelect,
  label,
}: BadgeSelectorProps) => {
  return (
    <Field className="flex flex-col gap-6">
      {label && (
        <Label className="text-content-primary text-sm uppercase">
          {label}
        </Label>
      )}
      <RadioGroup value={value} onChange={onSelect} className="flex flex-wrap">
        <div className="flex flex-wrap -space-x-px">
          {options.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              className={({ checked }) =>
                cn(
                  'relative cursor-pointer border p-6 transition-colors',
                  'flex items-center justify-center',
                  'text-content-primary text-sm uppercase',
                  checked
                    ? 'border-ui-border-primary z-base'
                    : 'border-ui-border-secondary',
                )
              }
            >
              {option.label}
            </Radio>
          ))}
        </div>
      </RadioGroup>
    </Field>
  );
};
