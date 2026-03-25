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
        bg: "#09070D",
        surface: "#121018",
        soft: "#0F0D14",
        border: "#2B2437",
        ink: "#F4F1FB",
        body: "#CEC8D8",
        muted: "#B9B0CA",
        faint: "#807592",
        accent: "#AA2F89",
        "accent-light": "#201327",
        "accent-text": "#F4B6E0",
        "accent-hover": "#C03CA0",
        gold: "#C9A84C",
        "gold-light": "#221A11",
        pastel: {
          green: "#16241D",
          gold: "#241B14",
          blue: "#131D2C",
          warm: "#23181D",
          purple: "#24132A"
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
