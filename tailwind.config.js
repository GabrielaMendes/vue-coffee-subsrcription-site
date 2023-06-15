/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["'Barlow', sans-serif"],
        fraunces: ["'Fraunces', serif"],
      },
      colors: {
        "light-beige": "#FEFCF7",
        "grey-text": "#83888F",
        "dark-gray-bg": "#2C343E",
        "dark-bluish-gray-text": "#333D4B",
        "light-salmon": "#FDD6BA",
        "primary-green": "#0E8784",
        "secondary-green": "#66D2CF",
      },
    },
  },
  plugins: [],
}
