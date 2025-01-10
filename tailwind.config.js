/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xxs: '256px',
        xs: '384px',
        s: '512px',
      },
      colors: {
        primary: '#FF801F',
        secondary: '#ff9500',
        warning: '#ffcc00',
        danger: '#ff3b30',
        success: '#34c759',
        info: '#32ade6',
      },
      maxWidth: {
        'header-nav': '39rem',
      },
      height: {
        sidebar: 'calc(100dvh - 5rem)',
      },
    },
  },
  plugins: [],
};
