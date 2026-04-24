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
          DEFAULT: "#F1F5F9",
          white: "#FFFFFF",
          navy: "#0B1220",
          "navy-soft": "#111A2E",
          "navy-elev": "#172340",
        },
        ink: {
          DEFAULT: "#0F172A",
          muted: "#64748B",
          dim: "#94A3B8",
          onDark: "#E2E8F0",
          onDarkMuted: "#94A3B8",
        },
        line: {
          DEFAULT: "#E2E8F0",
          soft: "#EEF2F7",
          onDark: "rgba(255,255,255,0.08)",
        },
        brand: {
          purple: "#7C3AED",
          indigo: "#6366F1",
          blue: "#3B82F6",
          cyan: "#22D3EE",
          green: "#10B981",
          emerald: "#34D399",
          amber: "#F59E0B",
          pink: "#F472B6",
          red: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px 600px at 80% 0%, rgba(99,102,241,0.25), transparent 60%), radial-gradient(900px 500px at 10% 0%, rgba(16,185,129,0.12), transparent 60%), linear-gradient(180deg, #0B1220 0%, #111A2E 100%)",
        "cta-gradient":
          "linear-gradient(120deg, #7C3AED 0%, #6366F1 100%)",
        "grid-dark":
          "linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-32": "32px 32px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.08)",
        "card-hover": "0 4px 12px rgba(15,23,42,0.06), 0 20px 48px -12px rgba(15,23,42,0.15)",
        "cta-glow": "0 10px 30px -8px rgba(124,58,237,0.55)",
      },
      animation: {
        "ping-slow": "ping 2.6s cubic-bezier(0, 0, 0.2, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
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
