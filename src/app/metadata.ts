import type { Metadata, Viewport } from 'next';

const DOMAIN = 'next-dapp-matteocelani.vercel.app';

const siteConfig = {
  title: 'Next.js dApp',
  description:
    'Next.js dApp template with Tailwind CSS and RainbowKit built in TypeScript.',
  keywords:
    'React, Next.js, Tailwind CSS, Sass, RainbowKit, Solidity, Hardhat, ethers.js, Blockchain, TypeScript',
  author: 'Matteo Celani',
  url: DOMAIN,
  image: `${DOMAIN}/img/logo.png`,
} as const;

export const viewport: Viewport = {
  themeColor: '#f2f2f7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
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
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.image }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
} as const;
