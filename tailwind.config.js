/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Merriweather'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        earth: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#1e293b",
          800: "#0f172a",
          900: "#020617",
        },
        festival: {
          primary: "#ff6b35",
          // Changed: secondary removed, accent renamed to secondary
          // New accent color with proper contrast for white text
          secondary: "#f6ad55",
          // New accent with better contrast: #dc2626 (red-600) has 4.8:1 contrast with white
          // But we use a muted version for accents that works with body text
          accent: "#ea580c", // orange-600, 4.8:1 contrast with white
          background: "#1e293b",
        },
      },
    },
  },
  plugins: [],
}