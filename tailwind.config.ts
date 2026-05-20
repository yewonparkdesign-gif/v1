import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      colors: {
        // SAP brand-aligned neutral palette
        canvas: {
          DEFAULT: "#0a0a0f",
          soft: "#0f0f18",
          raised: "#141420",
          overlay: "#1a1a28",
        },
        ink: {
          DEFAULT: "#f0f0f5",
          muted: "#9090a8",
          subtle: "#60607a",
          faint: "#30303f",
        },
        accent: {
          DEFAULT: "#0070f3",
          soft: "#1a7fff",
          dim: "rgba(0,112,243,0.15)",
        },
        gold: {
          DEFAULT: "#f5a623",
          dim: "rgba(245,166,35,0.12)",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          strong: "rgba(255,255,255,0.14)",
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "sidebar": "260px",
      },
      maxWidth: {
        prose: "72ch",
        content: "960px",
        wide: "1200px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#9090a8",
            a: { color: "#0070f3" },
            h1: { color: "#f0f0f5" },
            h2: { color: "#f0f0f5" },
            h3: { color: "#f0f0f5" },
            strong: { color: "#f0f0f5" },
            code: { color: "#f0f0f5" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
