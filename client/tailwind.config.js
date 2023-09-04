/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#3362CC",
      red: "#DE5753",
      white: "#FFF",
    },
    fontFamily: {
      heading: ['Signika Negative', 'sans-serif'], 
      secondary: ['Raleway']
    },
    extend: {},
  },
  plugins: [],
}

