import type {ReactNode} from 'react';
import type {Metadata} from 'next';
import {Cairo, Inter} from 'next/font/google';
import './globals.css';

const cairo = Cairo({subsets: ['arabic'], variable: '--font-cairo', display: 'swap'});
const inter = Inter({subsets: ['latin'], variable: '--font-inter', display: 'swap'});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: 'Science Teacher | علوم ببساطة',
    template: '%s | Science Teacher'
  },
  description: 'Professional science teacher website with booking, gallery, videos, and testimonials.',
  openGraph: {
    title: 'Science Teacher | علوم ببساطة',
    description: 'Book engaging science lessons online or in person.',
    images: ['/images/og.png'],
    type: 'website'
  }
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html className={`${cairo.variable} ${inter.variable}`} suppressHydrationWarning lang="en" dir="ltr">
      <body>
        {children}
      </body>
    </html>
  );
}
