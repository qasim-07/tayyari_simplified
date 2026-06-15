import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#0a2240", // Deep Blue Primary
            dark: "#051224",    // Extended Darker Navy for backgrounds/gradients
            sidebar: "#081b33", // Rich Navy Sidebar
          },
          gold: {
            DEFAULT: "#d97706", // Secondary Gold/Amber
            light: "#f59e0b",   // Highlights
            dark: "#b45309",    // Borders/Texts
          },
          gray: {
            DEFAULT: "#4b5563", // Neutral gray
            light: "#f3f4f6",   // Warm grey background
            dark: "#374151",    // Darker text/borders
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 120s linear infinite",
      }
    },
  },
  plugins: [],
};
export default config;
