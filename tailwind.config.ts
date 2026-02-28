import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "power-red": "#ff0040",
        "power-red-glow": "#ff3366",
        "power-blue": "#00d9ff",
        "power-blue-glow": "#00b8ff",
        "power-green": "#00ff88",
        "dark-base": "#0a0a0f",
        "dark-navy": "#0d1117",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "gradient-glow": "gradient-glow 6s ease-in-out infinite",
        grain: "grain 0.5s steps(10) infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
        "gradient-glow": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.9", filter: "brightness(1.1)" },
        },
        grain: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-10%, -10%)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-diagonal": "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "soft": "0 4px 24px rgba(0, 0, 0, 0.35)",
        "soft-lg": "0 8px 32px rgba(0, 0, 0, 0.4)",
        "glow-red": "0 0 40px rgba(255, 0, 64, 0.15)",
        "glow-blue": "0 0 40px rgba(0, 217, 255, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
