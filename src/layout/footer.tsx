'use client';

import { socialLinks } from '@/lib/constants/navigation';

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
