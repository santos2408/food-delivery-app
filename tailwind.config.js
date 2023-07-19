/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-purple-1": "#4e60ff",
        "brand-purple-2": "#5d6dff",
        "brand-purple-3": "#697bff",
        "brand-dark-1": "#2b2b43",
        "brand-gray-1": "#545563",
        "brand-gray-2": "#83859c",
        "brand-gray-3": "#c7c8d2",
      },
      boxShadow: {
        purple: "0px 8px 20px 0px rgba(78, 96, 255, 0.16)",
      },
    },
  },
  plugins: [],
};
