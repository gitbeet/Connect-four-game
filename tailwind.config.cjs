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
      yellow: "hsl(56,100%,60%)",
      red: "hsl(314,95%,56%)",
      "blue-400": "hsl(255,99%,85%)",
      "blue-300": "hsl(255,99%,89%)",
      "blue-200": "hsl(259,99%,89%)",

      outline: " hsl(270,59%,47%)",
      "bg-700": "hsl(212,88%,20%)",
      "bg-600": "hsl(207,88%,34%)",
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
