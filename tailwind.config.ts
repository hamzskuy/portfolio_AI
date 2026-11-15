import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0a",
        charcoal: "#0f0f0f",
        electric: "#3b82f6",
        cyan: {
          400: "#22d3ee",
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      opacity: {
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
        98: "0.98",
      },
    },
  },
  plugins: [],
};

export default config;