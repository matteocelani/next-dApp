'use client';

import { useState, useEffect } from 'react';
//Importing Next
import Image from 'next/image';
import Link from 'next/link';
//Importing RainbowKit
import { ConnectButton } from '@rainbow-me/rainbowkit';
// Import Types
import { NavigationProps } from '@/lib/types/layout';

export default function NavBar({ isOpen, toggleOpen }: NavigationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="px-4 xs:px-6 md:px-8 bg-02 shadow-lg dark:bg-09">
      <nav className="flex items-center justify-between mx-auto">
        <Link href="/" target="_self" className="py-4 pr-4">
          <Image src="/img/logo.png" alt="logo" width={60} height={60} />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <a
            className="text-black text-lg font-medium dark:text-white"
            href="https://github.com/matteocelani/next-dApp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-black text-lg font-medium dark:text-white"
            href="https://www.mashu.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
          <ConnectButton />
        </div>

        <div className="flex items-center md:hidden">
          <ConnectButton />
          <div
            onClick={toggleOpen}
            className={`hamburger flex flex-col justify-between w-6 h-5 cursor-pointer ml-4 ${
              isOpen ? 'open' : ''
            }`}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
