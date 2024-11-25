/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#008080', // Teal
        secondary: '#F28C8C', // Soft Coral
        tertiary: '#838383', // Grey
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Merriweather', 'serif'],
        fallback: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
