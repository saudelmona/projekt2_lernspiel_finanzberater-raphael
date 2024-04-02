/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  variants: {
    extends: {
      scale: ['group-hover', 'hover'],
    },
  },
  plugins: [],
}

