import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#05060A",
          soft: "#0B0F1A",
          card: "#0E1322",
        },
        ink: {
          DEFAULT: "#E6E8EE",
          muted: "#9aa3b2",
          dim: "#6b7280",
        },
        neon: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
          cyan: "#22D3EE",
          pink: "#F472B6",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "neon-gradient":
          "linear-gradient(120deg, #22D3EE 0%, #3B82F6 50%, #8B5CF6 100%)",
        "radial-fade":
          "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.18), transparent 60%)",
      },
      backgroundSize: {
        "grid-32": "32px 32px",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59,130,246,0.55)",
        "glow-purple": "0 0 60px -10px rgba(139,92,246,0.5)",
        "glow-cyan": "0 0 60px -10px rgba(34,211,238,0.45)",
        "inner-soft": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
