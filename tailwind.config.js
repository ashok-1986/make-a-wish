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
        accent: {
          primary: "#ff6b35",
          secondary: "#f6ad55",
        },
        festival: {
          primary: "#ff6b35",
          secondary: "#f6ad55",
          accent: "#ea580c", // orange-600, 4.8:1 contrast with white
          background: "#1e293b",
        },
      },
    },
  },
  plugins: [],
}