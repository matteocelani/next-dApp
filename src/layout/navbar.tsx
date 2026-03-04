'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { navLinks } from '@/lib/constants/navigation';
import { NavigationProps } from '@/lib/types/layout';

export function NavBar({ isOpen, toggleOpen }: NavigationProps) {
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
          {navLinks.map(({ label, href }) => {
            const isExternal = href.startsWith('http');
            return (
              <Link
                key={label}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="text-black text-lg font-medium dark:text-white hover:opacity-80 transition-opacity"
              >
                {label}
              </Link>
            );
          })}
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
            <div className="flex flex-col justify-between w-6 h-5 relative">
              <span
                className={`w-full h-[3px] bg-neutral-800 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-[8px]' : ''
                }`}
              />
              <span
                className={`w-full h-[3px] bg-neutral-800 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-[3px] bg-neutral-800 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
