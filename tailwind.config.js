/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#FFFAF5',
        secondary: '#6096a8',
        accent: '#60AD9C',
      },
      fontFamily: {
        cloudsoft: ['Cloudsoft', 'sans-serif'],
        peanutButter: ['Peanut Butter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
