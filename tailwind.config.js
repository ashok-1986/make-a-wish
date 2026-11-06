/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      /* 8gnc.io enterprise dark-mode palette with royal plum & champagne accents */
      colors: {
        dark: {
          bg: "#0B090E",
          card: "#131019",
          elevated: "#1A1624",
          border: "rgba(255, 255, 255, 0.08)",
        },
        plum: "#7c3aed", // Royal violet/plum
        "plum-dark": "#5c2f7f", // Deep brand anchor
        ink: "#FFFFFF", // High-contrast crisp white for text
        sun: "#E5C178", // Architectural champagne gold
        amber: "#D97706", // Refined amber
        sky: "#38BDF8", // Clean tech blue
        cream: "#1A1624", // Dark elevated card surface
        paper: "#0B090E", // Obsidian background base
      },
    },
  },
  plugins: [],
};
