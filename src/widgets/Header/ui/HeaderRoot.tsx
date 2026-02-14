import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/shared/lib/utils';
import { Container } from '@/shared/ui/Container';

interface HeaderRootProps {
    children?: ReactNode;
    className?: string;
}

export const HeaderRoot = ({ children, className = '' }: HeaderRootProps) => {
    return (
        <header className={cn('sticky top-0 z-header bg-surface px-4 tablet:px-10', className)}>
            <Container max="xl">
                <div className="h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/assets/img/logo_black.svg"
                            alt="Zara Shop Logo"
                            height={24}
                            width={74}
                            className="h-6 w-auto"
                            priority
                        />
                    </Link>
                    {children}
                </div>
            </Container>
        </header>
    );
};
