/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      /* 8gnc.io enterprise architectural studio palette */
      colors: {
        paper: "#F9F8F6", // Warm studio paper ground
        "paper-warm": "#F4EFE6", // Richer paper tone for strips
        surface: "#FFFFFF", // Elevated white card surface
        "dark-studio": "#111111", // Contrasting executive black
        plum: "#7c3aed", // Royal violet/plum accent
        "plum-dark": "#5c2f7f", // Deep brand anchor
        ink: "#111111", // Deep crisp typography ink
        "ink-muted": "#5C5652", // Architectural secondary copy
        sun: "#E5C178", // Architectural champagne gold
        amber: "#D97706", // Refined amber
        sky: "#38BDF8", // Clean tech blue
        dark: {
          bg: "#0B090E",
          card: "#131019",
          elevated: "#1A1624",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
    },
  },
  plugins: [],
};
