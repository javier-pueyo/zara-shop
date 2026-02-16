import type { Metadata } from 'next';
import './tailwind.css';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'Zara',
  description:
    'Discover the latest mobile phones and accessories at the best prices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
