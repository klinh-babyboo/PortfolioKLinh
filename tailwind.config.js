/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        helvetica: ['"Helvetica Neue"', '"Helvetica Neue Roman"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      }
    },
  },
  plugins: [],
}
