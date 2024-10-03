import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
//Importing icon
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeSwitch({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function switchTheme(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <button
      className={
        `w-fit rounded-full p-1.5 bg-gray-300 dark:bg-gray-500 ` + className
      }
      title="Switch Theme"
      onClick={switchTheme}
    >
      <div className="rounded-full p-2 shadow-lg bg-gray-800 dark:bg-gray-200">
        {resolvedTheme === 'dark' ? (
          <HiMoon className="h-6 w-6 text-black" />
        ) : (
          <HiSun className="h-6 w-6 text-white" />
        )}
      </div>
    </button>
  );
}
