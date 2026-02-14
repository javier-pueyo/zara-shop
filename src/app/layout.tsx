import type { Metadata } from 'next';
import './tailwind.css';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'Zara Shop',
  description: 'Zara Shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
