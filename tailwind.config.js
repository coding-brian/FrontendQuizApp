/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      purple: '#a729f5',
      'dark-navy': '#313e51',
      navy: '#3b4d66',
      'grey-navy': '#626c7f',
      'light-grey': '#abc1e1',
      'light-bluish': '#f4f6fa',
      white: '#ffffff',
      green: '#26d782',
      red: '#ee5454',
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
