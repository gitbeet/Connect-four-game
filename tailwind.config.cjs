/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      text: ["Lobster", "cursive"],
      numbers: ["Racing Sans One", "cursive"],
      rules: ["Roboto", "sans-serif"],
    },
    colors: {
      yellow: "#FFF000",
      red: "#f92381",
      "blue-400": "#01a1bd",
      "blue-300": "#00afce",
      "blue-200": "#0ad2f5",

      outline: "#080A0C",
      "bg-700": "#063161",
      "bg-600": "#09538f",
      white: "#FFFF",
    },
    screens: {
      md: "768px",
      lg: "1440px",
      // prettier-ignore
      "hover-hover": { "raw": "(hover: hover)" },
    },
  },

  plugins: [],
};
