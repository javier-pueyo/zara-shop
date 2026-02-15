import {
  Field,
  Label,
  Input as HeadlessInput,
  InputProps as HeadlessInputProps,
} from '@headlessui/react';
import { forwardRef, useRef, useImperativeHandle } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button/Button';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends Omit<HeadlessInputProps, 'onChange'> {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, className, value = '', onChange, onClear, placeholder, ...props },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const nativeEvent = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value',
      )?.set;

      if (inputRef.current && nativeEvent) {
        nativeEvent.call(inputRef.current, '');
        inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
      }

      onClear?.();
      inputRef.current?.focus();
    };

    const hasContent = String(value).length > 0;

    return (
      <Field className="border-ui-border-primary bg-surface relative flex w-full items-center border-b">
        <HeadlessInput
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            '--color-content-primary placeholder:text-content-tertiary w-full pr-5 pb-2 text-base outline-none',
            className,
          )}
          {...props}
        />

        {hasContent && (
          <Button
            variant="plain"
            className="text-content-primary absolute right-0"
            tabIndex={-1}
            aria-label="Limpiar campo"
            onClick={handleClear}
          >
            <Button.Icon name="close" className="rotate-180" />
          </Button>
        )}
      </Field>
    );
  },
);

Input.displayName = 'Input';
