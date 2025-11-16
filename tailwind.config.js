/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f59e0b', // amber-500 vibe for CTA
          dark: '#f59e0b'
        }
      }
    },
  },
  plugins: [],
}
