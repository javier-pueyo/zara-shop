import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as Icons from '@/shared/assets/icons';
import { ComponentProps } from 'react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type IconName = 'arrow-left' | 'close' | 'bag-solid' | 'bag-outline';

const iconMap: Record<
  IconName,
  { src: string; width: number; height: number }
> = {
  'arrow-left': Icons.ArrowLeft,
  close: Icons.Close,
  'bag-solid': Icons.BagSolid,
  'bag-outline': Icons.BagOutline,
};

const EMPTY_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E`;

// 1. Definimos los tamaños permitidos basados en tu escala de Tailwind
const sizeStyles = {
  1: 'w-1 h-1',
  2: 'w-2 h-2',
  4: 'w-4 h-4',
  5: 'w-5 h-5',
  6: 'w-6 h-6',
} as const;

// 2. Extraemos el tipo de las llaves (esto hará que solo puedas pasar 1, 2, 4, 5 o 6)
export type IconSize = keyof typeof sizeStyles;

export interface IconProps extends Omit<ComponentProps<'img'>, 'src'> {
  name: IconName;
  size?: IconSize; // Ahora el tamaño está limitado
}

export const Icon = ({
  name,
  className,
  size = 5,
  style,
  ...props
}: IconProps) => {
  const icon = iconMap[name];

  if (!icon) return null;

  return (
    <img
      src={EMPTY_SVG}
      className={cn(
        'inline-block shrink-0 bg-current',
        sizeStyles[size], // Acceso directo y seguro al mapeo
        className,
      )}
      style={{
        mask: `url("${icon.src}") no-repeat center / contain`,
        WebkitMask: `url("${icon.src}") no-repeat center / contain`,
        ...style,
      }}
      alt={name}
      {...props}
    />
  );
};
