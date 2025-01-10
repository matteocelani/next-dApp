'use client';

import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoGithub, IoFlash, IoPlanet } from 'react-icons/io5';

const socialLinks = [
  {
    href: 'https://github.com/matteocelani',
    icon: <IoLogoGithub className="w-5 h-5" />,
    label: 'Github',
    hoverColor: 'hover:text-black hover:dark:text-black',
  },
  {
    href: 'https://twitter.com/0xMashu',
    icon: <FaXTwitter className="w-5 h-5" />,
    label: 'Twitter',
    hoverColor: 'hover:text-blue-600 hover:dark:text-blue-600',
  },
  {
    href: '#',
    icon: <IoFlash className="w-5 h-5" />,
    label: 'Bitcoin Wallet',
    hoverColor: 'hover:text-primary hover:dark:text-primary',
  },
  {
    href: 'https://mashu.dev',
    icon: <IoPlanet className="w-5 h-5" />,
    label: 'Website',
    hoverColor: 'hover:text-green-500 hover:dark:text-green-500',
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-100 sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-neutral-800">
      <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-300 sm:mb-0">
        &copy; {new Date().getFullYear()}{' '}
        <a
          className="hover:underline"
          href="https://mashu.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matteo Celani
        </a>
        . All rights reserved.
      </p>

      <div className="flex justify-center items-center space-x-1">
        {socialLinks.map(({ href, icon, label, hoverColor }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-300 ${hoverColor} hover:bg-gray-100 dark:hover:bg-gray-600`}
          >
            {icon}
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
