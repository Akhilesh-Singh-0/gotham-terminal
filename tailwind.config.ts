import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gotham: {
          black:    "#08080a",
          deep:     "#0d0d10",
          charcoal: "#131316",
          slate:    "#1a1a1f",
          smoke:    "#222228",
          gunmetal: "#2b2b33",
          dim:      "#3a3a44",
          mist:     "#4f4f5a",
          ash:      "#6a6a76",
          silver:   "#8c8c98",
          fog:      "#b2b2bc",
          ghost:    "#d0d0d8",
        },
        crimson: {
          dark:    "#570f0f",
          DEFAULT: "#8b1a1a",
          rich:    "#a82020",
          lit:     "#c42828",
        },
        gold: {
          dark:    "#8a7532",
          DEFAULT: "#c9a84c",
          light:   "#d4b86a",
          pale:    "#e8d49c",
          glow:    "#f0c058",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui"],
        body:    ["var(--font-body)", "system-ui"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      animation: {
        "blink":         "blink-dot 1.2s step-end infinite",
        "signal-pulse":  "signal-pulse 3.5s ease-in-out infinite",
        "fog-drift":     "fog-drift 9s ease-in-out infinite",
        "scan-line":     "scan-line 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;