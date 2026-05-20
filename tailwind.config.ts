import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        // Backed by CSS variables — automatically switches with dark/light mode
        canvas: {
          DEFAULT: "var(--canvas)",
          soft: "var(--canvas-soft)",
          raised: "var(--canvas-raised)",
          overlay: "var(--canvas-overlay)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          muted: "var(--ink-muted)",
          subtle: "var(--ink-subtle)",
          faint: "var(--ink-faint)",
        },
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
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
            color: "var(--ink-muted)",
            a: { color: "#0070f3" },
            h1: { color: "var(--ink)" },
            h2: { color: "var(--ink)" },
            h3: { color: "var(--ink)" },
            strong: { color: "var(--ink)" },
            code: { color: "var(--ink)" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
