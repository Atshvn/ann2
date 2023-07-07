/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,png,jpg,svg,scss,sass}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})