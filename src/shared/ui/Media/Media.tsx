import Image, { ImageProps } from 'next/image';
import { cn } from '@/shared/lib/utils';

interface MediaProps extends Partial<Omit<ImageProps, 'src' | 'alt'>> {
    ratio?: 'horizontal' | 'vertical' | 'none';
    fit?: 'cover' | 'contain';
    multiply?: boolean;
    className?: string;
    src: string;
    alt: string;
}

export const Media = ({
    ratio = 'none',
    fit = 'cover',
    multiply = false,
    className,
    ...rest
}: MediaProps) => {

    const ratios = {
        horizontal: "aspect-image-horizontal",
        vertical: "aspect-image-vertical",
        none: "",
    };

    return (
        <div className={cn("relative overflow-hidden", ratios[ratio], className)}>
            <Image
                fill
                className={cn(
                    fit === 'cover' ? "object-cover" : "object-contain",
                    multiply && "mix-blend-multiply"
                )}
                {...rest}
            />
        </div>
    );
};
