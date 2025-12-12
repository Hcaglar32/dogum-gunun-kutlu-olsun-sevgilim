import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Romantik yeşil tonları - tutarlı ve uyumlu
        romantic: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
      },
      fontFamily: {
        romantic: ["Great Vibes", "cursive"],
        "romantic-alt": ["Dancing Script", "cursive"],
        elegant: ["Dancing Script", "cursive"],
        sans: ["Dancing Script", "cursive"],
      },
      animation: {
        "heart-beat": "heartBeat 1.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
      },
      keyframes: {
        heartBeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-romantic": "linear-gradient(135deg, #d8f3dc 0%, #b7e4c7 50%, #95d5b2 100%)",
        "gradient-soft": "linear-gradient(180deg, #f0fdf4 0%, #d8f3dc 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
