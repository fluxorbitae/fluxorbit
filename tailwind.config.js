import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: "#14B8A6",
          50: "#ECFEF9",
          100: "#D1FAF5",
          200: "#A7F3EB",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0EA5A4",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A"
        },
        darkbg: "#0E0F10",
        uigray: "#1F2426"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;