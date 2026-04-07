import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1200px"
        }
      },
      fontFamily: {
        bricolage: ["var(--font-bricolage)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      colors: {
        bg: "#F5F8FF",
        surface: "#FFFFFF",
        soft: "#EDF3FF",
        border: "#D9E2F2",
        ink: "#0F172A",
        body: "#334155",
        muted: "#64748B",
        faint: "#94A3B8",
        accent: "#2563EB",
        "accent-light": "#DBEAFE",
        "accent-text": "#1E3A8A",
        "accent-hover": "#1D4ED8",
        gold: "#0EA5A4",
        "gold-light": "#CCFBF1",
        pastel: {
          green: "#DCFCE7",
          gold: "#FEF3C7",
          blue: "#DBEAFE",
          warm: "#FFE4E6",
          purple: "#EDE9FE"
        }
      },
      boxShadow: {
        card: "0 4px 32px rgba(0,0,0,0.28)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.36)",
        soft: "0 2px 20px rgba(0,0,0,0.24)"
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 4s ease-in-out infinite",
        morph: "morphBlob 8s ease-in-out infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        morphBlob: {
          "0%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
          "25%": { borderRadius: "58% 42% 75% 25% / 76% 46% 54% 24%" },
          "50%": { borderRadius: "50% 50% 33% 67% / 55% 27% 73% 45%" },
          "75%": { borderRadius: "33% 67% 58% 42% / 63% 68% 32% 37%" },
          "100%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
