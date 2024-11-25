/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "teal": '#008080', // Teal
        "soft-coral": '#F28C8C', // Soft Coral
        "Grey" :'#838383', // Grey
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
  
