/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xsm: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        xl: "1.125rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "1.875rem",
        "5xl": "2.5rem",
        "6xl": "3.75rem",
      },
      lineHeight: {
        custom: "156%",
      },
      letterSpacing: {
        custom: "-0.03rem",
      },
      colors: {
        "brand-white": "#fff",
        "brand-black": "#000",

        "brand-primary-500": "#FF2851",
        "brand-primary-400": "#FF5374",
        // "brand-primary-300": "#FF6F8A",
        "brand-primary-100": "#FFBCC9",
        "brand-primary-50": "#FFEAEE",

        "brand-secondary-500": "#FF7051",

        "brand-success-400": "#54C59C",

        "brand-neutral-50": "#EBEDEE",
        "brand-neutral-100": "#C1C7CB",
        "brand-neutral-200": "#A3ABB2",
        "brand-neutral-300": "#79858E",
        "brand-neutral-400": "#5F6D79",
        "brand-neutral-500": "#374957",
        "brand-neutral-600": "#32424F",
        "brand-neutral-800": "#1E2830",

        "brand-purple-1": "#4e60ff",
        "brand-purple-2": "#5d6dff",
        "brand-purple-3": "#697bff",
        "brand-dark-1": "#2b2b43",
        "brand-gray-1": "#545563",
        "brand-gray-2": "#83859c",
        "brand-gray-3": "#c7c8d2",
        "brand-gray-4": "#f5f5f5",
      },
      boxShadow: {
        primary: "0px 8px 20px 0px rgba(349, 100, 58, 0.16)",
      },
    },
  },
  plugins: [],
};
