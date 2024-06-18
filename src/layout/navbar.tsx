import { useState, useEffect } from 'react';
//Importing Next
import Image from 'next/image';
import Link from 'next/link';
//Importing RainbowKit
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function NavBar() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="px-4 xs:px-6 md:px-8 bg-02 shadow-lg dark:bg-09">
      <nav className="flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" target="_self" className="py-4 pr-4">
          <Image src="/img/logo.png" alt="logo" width={60} height={60} />
        </Link>
        <div className="contents justify-self-end py-5 px-8 h-8 cursor-pointer md:hidden">
          <div
            onClick={toggleNav}
            className={`hamburger flex flex-col justify-between w-6 h-5 cursor-pointer ${
              isNavVisible ? 'open' : ''
            }`}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>

        <div
          className={`w-full md:block md:max-w-header-nav ${
            isNavVisible ? 'block' : 'hidden'
          }`}
        >
          <ul className="p-0 mt-0 mb-6 flex flex-col w-full md:m-0 md:flex-row md:justify-around">
            <li className="flex items-center justify-center">
              <a
                className="block px- py-2 text-black text-lg font-medium dark:text-white"
                href="https://github.com/matteocelani/next-dApp"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                className="block px-4 py-2 text-black text-lg font-medium dark:text-white"
                href="https://www.mashu.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            </li>
            <li className="flex pt-2 md:pt-0 items-center justify-center">
              <ConnectButton />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
