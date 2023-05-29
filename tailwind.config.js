/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xxs': '256px',
        'xs': '384px',
        's': '512px',
      },
      colors: {
        '01': '#F8F9FA',
        '02': '#E9ECEF',
        '03': '#DEE2E6',
        '04': '#CED4DA',
        '05': '#ADB5BD',
        '06': '#6C757D',
        '07': '#495057',
        '08': '#343A40',
        '09': '#212529',

        'primary': '#FF801F',
      },
      maxWidth: {
        'header-nav': '39rem',
      },
    },
  },
  plugins: [],
}
