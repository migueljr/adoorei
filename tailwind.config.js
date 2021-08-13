
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          ...colors.pink,
          '600': '#fe007c'
        }
      },
      spacing: {
        '100': '30rem',
        '101': '32rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
