import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoGithub, IoFlash, IoPlanet } from 'react-icons/io5';

// Navbar links
export const navLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/matteocelani/next-dApp',
  },
  {
    label: 'Website',
    href: 'https://www.mashu.dev/',
  },
];

// Footer social links
export const socialLinks = [
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

// Navigation items (from your existing navigation.ts)
export const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: IoLogoGithub,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/matteocelani',
    icon: IoLogoGithub,
  },
  {
    name: 'Website',
    href: 'https://mashu.dev',
    icon: IoPlanet,
  },
];