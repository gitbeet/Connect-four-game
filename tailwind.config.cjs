/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      text: ["Lobster", "cursive"],
      numbers: ["Racing Sans One", "cursive"],
    },
    colors: {
      yellow: "#FFF000",
      red: "#f92381",
      "blue-400": "#0aa48c",
      "blue-300": "#09ba9e",
      "blue-200": "#09e0be",

      outline: "#080A0C",
      "bg-500": "#174c57",
      "bg-400": "#1c6372",
      "bg-300": "#1b818d",

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
