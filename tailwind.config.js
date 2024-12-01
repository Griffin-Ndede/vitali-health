/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        "teal": '#008080', // Teal
        "primary-green": "#002424", //special green
        "soft-coral": '#F28C8C', // Soft Coral
        "Grey": '#838383', // Grey
        "light-bg": '#f8f9fa', // Light mode background
        "dark-bg": '#121212', // Dark mode background
      },
      backgroundColor: {
        "light-bg": '#f8f9fa', // Light mode background
        "dark-bg": '#121212', // Dark mode background
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        secondary: ['Merriweather', 'serif'],
        fallback: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
