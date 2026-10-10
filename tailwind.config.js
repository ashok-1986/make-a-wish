/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "cursive"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      /* Brand colours sampled from the Make a Wish logo (public/logo.webp) */
      colors: {
        plum: "#5c2f7f", // lettering and stars
        ink: "#2b1442", // deepened plum for body text
        sun: "#f8e23a", // logo swirl, sunshine yellow
        amber: "#fdc32e", // logo swirl, warm yellow
        sky: "#7ed2ea", // logo swirl, blue
        cream: "#fff9b0", // star
        paper: "#fffce3", // lightened star, page ground
      },
    },
  },
  plugins: [],
};
