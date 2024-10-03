//Importing Next
import Link from 'next/link';
import { useRouter } from 'next/router';
//Importing components
import ThemeSwitch from '@/components/ThemeSwitch';
// Import Types
import { NavigationProps } from '@/lib/types/layout';
// Import Navigation
import { navigation } from '@/lib/constants/navigation';

export default function Sidebar({ isOpen, toggleOpen }: NavigationProps) {
  const router = useRouter();

  return (
    <aside
      id="sidebar"
      className={`z-50 mt-24 min-w-full h-sidebar transition-transform p-4 fixed overflow-y-auto 
          ${isOpen ? '-translate-x-0 sm:-translate-x-full shadow-xl' : '-translate-x-full'} 
          duration-300 bg-01 dark:bg-black`}
    >
      <div className="relative h-full p-4 rounded-xl flex flex-col justify-between overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center px-6 py-4 rounded-lg 
                    ${
                      router.pathname === item.href
                        ? 'bg-shadow-primary'
                        : 'hover:bg-gray5-light dark:hover:bg-gray5-dark'
                    }`}
                onClick={toggleOpen}
              >
                <item.icon className="w-6 h-6" />
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
