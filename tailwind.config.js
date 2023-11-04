/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'blue': '#2F4CBE',
        'blue-light': '#366ABD',
        'green': '#44BBA4',
        'white': '#EDF4F3',
        'gray-light': '#B4D0CF',
        'gray': '#718282',
        'black': '#2D3434'
      }
    },
    fontFamily: {
      'main': ['"New Shape"', 'sans-serif']
    }
  },
  plugins: [],
}
