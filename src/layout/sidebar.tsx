'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitch from '@/components/features/ThemeSwitch';
import { navigation } from '@/lib/constants/navigation';
import { NavigationProps } from '@/lib/types/layout';

export default function Sidebar({ isOpen, toggleOpen }: NavigationProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`z-50 mt-24 min-w-full h-sidebar transition-transform p-4 fixed overflow-y-auto 
          ${isOpen ? '-translate-x-0 sm:-translate-x-full shadow-xl' : '-translate-x-full'} 
          duration-300 bg-neutral-50 dark:bg-black`}
    >
      <div className="relative h-full p-4 rounded-xl flex flex-col justify-between overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`
                  flex items-center px-6 py-4 rounded-lg
                  transition-colors duration-200
                  ${
                    pathname === item.href
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'hover:bg-gray5-light dark:hover:bg-gray5-dark'
                  }
                `}
                onClick={toggleOpen}
              >
                <item.icon
                  className={`w-6 h-6 ${
                    pathname === item.href ? 'text-primary' : ''
                  }`}
                />
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ThemeSwitch className="mx-auto" />
      </div>
    </aside>
  );
}
