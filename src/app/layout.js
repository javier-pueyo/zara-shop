import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import Background from "@/components/background/background";
import "@/index.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Creative Developer Pueyo Mir",
  icons: {
    icon: '/portfolio/assets/img/favicon-32x32.png',
    apple: '/portfolio/assets/img/favicon-180x180.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Background />
        {children}
        <Script src="https://kit.fontawesome.com/87293197e8.js" crossOrigin="anonymous" strategy="lazyOnload" />
      </body>
    </html>
  );
}
