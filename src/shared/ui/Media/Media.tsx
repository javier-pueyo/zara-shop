import Image, { ImageProps } from 'next/image';
import { cn } from '@/shared/lib/utils';

interface MediaProps extends Partial<Omit<ImageProps, 'src' | 'alt'>> {
  ratio?: 'horizontal' | 'vertical' | 'none';
  fit?: 'cover' | 'contain';
  className?: string;
  imageClassName?: string;
  src: string;
  alt: string;
}

export const Media = ({
  ratio = 'none',
  fit = 'cover',
  className,
  imageClassName,
  ...rest
}: MediaProps) => {
  const ratios = {
    horizontal: 'aspect-image-horizontal',
    vertical: 'aspect-image-vertical',
    none: '',
  };

  return (
    <div className={cn('relative overflow-hidden', ratios[ratio], className)}>
      <Image
        fill
        className={cn(
          fit === 'cover' ? 'object-cover' : 'object-contain',
          imageClassName,
        )}
        {...rest}
      />
    </div>
  );
};
