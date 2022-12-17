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
      "blue-300": "#0aa48c",

      outline: "#080A0C",
      "bg-500": "#174c57",
      "bg-400": "#174c57",

      white: "#FFFF",
    },
    screens: {
      md: "768px",
      lg: "1440px",
    },
  },

  plugins: [],
};
