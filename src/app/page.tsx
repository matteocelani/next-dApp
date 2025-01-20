'use client';

import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import ThemeSwitch from '@/components/features/ThemeSwitch';

export default function Home() {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      // eslint-disable-next-line no-console
      console.log('Wallet address: ', address);
    } else {
      // eslint-disable-next-line no-console
      console.log('Not connected');
    }
  }, [address, isConnected]);

  return (
    <div className="w-full flex flex-col">
      <h1 className="flex flex-col sm:flex-row justify-center items-center text-4xl font-bold">
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        <span className="mx-2 hidden sm:block">+</span>
        <a
          className="mt-4 sm:mt-0"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
      </h1>
      <h2 className="mt-2 flex flex-col sm:flex-row justify-center items-center text-3xl font-bold">
        <a href="https://wagmi.sh/" target="_blank" rel="noopener noreferrer">
          Wagmi
        </a>
        <span className="mx-2 hidden sm:block">+</span>
        <a
          className="mt-4 sm:mt-0"
          href="https://tanstack.com/query/latest"
          target="_blank"
          rel="noopener noreferrer"
        >
          TanStack Query
        </a>
        <span className="mx-2 hidden sm:block">+</span>
        <a
          className="mt-4 sm:mt-0"
          href="https://www.rainbowkit.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RainbowKit
        </a>
      </h2>
      <h3 className="text-2xl text-center mt-4">written in TypeScript</h3>
      <div className="flex justify-center mt-8">
        <ThemeSwitch />
      </div>
    </div>
  );
}
