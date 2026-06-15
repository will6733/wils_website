import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#000000",
          800: "#1d1d1f",
          700: "#272729",
        },
        paper: "#f5f5f7",
        aurora: {
          DEFAULT: "#0071e3",
          400: "#0066cc",
          300: "#2997ff",
          cyan: "#0071e3",
        },
        mid: "#6e6e73",
        "border-soft": "#d2d2d7",
        "border-mid": "#86868b",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        "muted-foreground": "rgb(var(--muted-foreground) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        display: ["var(--font-inter-tight)", "var(--font-inter)", "Helvetica Neue", "sans-serif"],
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
      },
      maxWidth: {
        container: "1180px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
        display: "-0.144px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
