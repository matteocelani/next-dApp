'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { navLinks } from '@/lib/constants/navigation';
import { NavigationProps } from '@/lib/types/layout';

export default function NavBar({ isOpen, toggleOpen }: NavigationProps) {
  return (
    <header className="px-4 xs:px-6 md:px-8 bg-neutral-100 shadow-lg dark:bg-neutral-800">
      <nav className="flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/" className="py-4 pr-4">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={60}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-black text-lg font-medium dark:text-white"
            >
              {label}
            </a>
          ))}
          <ConnectButton />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ConnectButton />
          <button
            onClick={() => toggleOpen()}
            className="ml-4"
            aria-label="Toggle Menu"
          >
            <div
              className={`hamburger flex flex-col justify-between w-6 h-5 ${isOpen ? 'open' : ''}`}
            >
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
