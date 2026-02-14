import { Button as HeadlessButton, ButtonProps as HeadlessButtonProps } from '@headlessui/react';
import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Icon, type IconProps } from '../Icon/Icon';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HeadlessButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'plain';
}

const ButtonRoot = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
    const baseStyles = cn(
        'inline-flex items-center gap-2',
        'text-center align-middle',
        'cursor-pointer disabled:cursor-not-allowed'
    );

    const variants = {
        primary: 'p-5 text-xs uppercase justify-center tracking-[0.08em] bg-brand-primary text-content-inverse disabled:',
        secondary: 'p-5 text-xs uppercase justify-center tracking-[0.08em] bg-surface text-content-primary border border-brand-primary',
        plain: 'text-content-primary',
    };

    return (
        <HeadlessButton
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </HeadlessButton>
    );
};

const ButtonIcon = (props: IconProps) => {
    return <Icon {...props} />;
};

type ButtonComponent = typeof ButtonRoot & {
    Icon: typeof ButtonIcon;
};

const Button = ButtonRoot as ButtonComponent;
Button.Icon = ButtonIcon;

export { Button };
