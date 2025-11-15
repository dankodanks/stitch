import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#007AFF",
        "primary-alt": "#136dec",
        "background-light": "#F2F2F7",
        "background-dark": "#101822",
        "card-light": "#FFFFFF",
        "card-dark": "#1C1C1E",
        "text-light-primary": "#1C1C1E",
        "text-light-secondary": "#8E8E93",
        "text-dark-primary": "#FFFFFF",
        "text-dark-secondary": "#8E8E93",
        "destructive": "#FF3B30",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
