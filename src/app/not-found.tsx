import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js dApp | 404: This page could not be found.',
  openGraph: {
    images: ['/img/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/img/logo.png'],
  },
};

export default function NotFound() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="flex flex-col sm:flex-row justify-center items-center text-4xl font-bold ">
        404
      </h1>
      <h2 className="text-2xl text-center mt-4">
        The requested URL /error was not found on this server.
      </h2>
    </div>
  );
}
