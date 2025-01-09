import type { Metadata, Viewport } from 'next';
import { metadata as siteMetadata } from '@/lib/constants';

export const viewport: Viewport = {
  themeColor: '#f2f2f7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // Aggiorna con il tuo dominio
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.autor }],
  manifest: '/site.webmanifest',
  icons: {
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    url: siteMetadata.url,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [{ url: siteMetadata.image }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.image],
  },
};
