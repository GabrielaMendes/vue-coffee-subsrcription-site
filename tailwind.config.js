/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xs": "444px",
        "change-menu": "680px",
        "lger": "1307px",
      },
      fontFamily: {
        barlow: ["'Barlow', sans-serif"],
        fraunces: ["'Fraunces', serif"],
      },
      colors: {
        "light-beige": "#FEFCF7",
        "greyish-cream": "#F4F1EB",
        "dark-greyish-cream": "#E2DEDB",
        "grey-text": "#83888F",
        "dark-gray-bg": "#2C343E",
        "dark-bluish-gray-text": "#333D4B",
        "light-salmon": "#FDD6BA",
        "primary-green": "#0E8784",
        "secondary-green": "#66D2CF",
        "light-overlary": "rgba(254, 252, 247, 0.505)",
        "lighter-overlary": "rgba(254, 252, 247, 0.0001)",
      },
    },
  },
  plugins: [],
}
