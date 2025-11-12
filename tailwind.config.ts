import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0A12",
        ink: "#F6F6F9",
        "ink-muted": "rgba(246,246,249,0.7)",
        "accent-violet": "#7B4AE2",
        "accent-red": "#EF4D5B",
        "card-bg": "rgba(29,18,52,0.8)",
        "card-border": "rgba(123,74,226,0.32)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.25)"
      },
      spacing: {
        3: "0.75rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        12: "3rem",
        16: "4rem"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
