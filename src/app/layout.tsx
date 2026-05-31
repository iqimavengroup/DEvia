import type { Metadata } from 'next';
import { Cormorant_Garamond, Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devia-kwasadamansara.com'),
  title: 'D\'Evia Kwasa Damansara | New Launch Property',
  description: 'D\'Evia at Kwasa Damansara – a premier residential development in Selangor. Register your interest today.',
  openGraph: {
    title: 'D\'Evia Kwasa Damansara | New Launch Property',
    description: 'D\'Evia at Kwasa Damansara – a premier residential development in Selangor. Register your interest today.',
    images: [{ url: '/assets/page_03.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D\'Evia Kwasa Damansara | New Launch Property',
    description: 'D\'Evia at Kwasa Damansara – a premier residential development in Selangor.',
    images: ['/assets/page_03.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
