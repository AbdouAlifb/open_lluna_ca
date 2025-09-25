import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="brand"]'],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#28B7D5",
          50: "#EBFAFE",
          100: "#D6F5FC",
          200: "#AEEAF8",
          300: "#86DFF3",
          400: "#5ED4EE",
          500: "#35C9E9",
          600: "#28B7D5",
          700: "#1E90A6",
          800: "#166B79",
          900: "#0E4750"
        }
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,0.08)" }
    }
  },
  plugins: [],
};
export default config;
