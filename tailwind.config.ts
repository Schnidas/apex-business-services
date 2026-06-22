import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm machine palette — soft orange current over a grey instrument panel
        ember: {
          DEFAULT: "#EE7B47", // soft orange — the current
          bright: "#FF9E6B", // glow / highlights
          deep: "#C9551F", // pressed / shadow
          wash: "rgba(238,123,71,0.10)",
          line: "rgba(238,123,71,0.34)",
        },
        coal: {
          DEFAULT: "#171310", // warm near-black sections
          soft: "#211B16",
          raised: "#2A231D",
        },
        ink: {
          DEFAULT: "#221C17", // primary text on light
          dim: "rgba(34,28,23,0.66)",
          faint: "rgba(34,28,23,0.42)",
        },
        canvas: {
          DEFAULT: "#EFEBE6", // warm grey base
          deep: "#E6E0D8", // recessed panel
          raised: "#F7F4EF", // raised panel
        },
        bone: "#FBF9F6",
        slate: {
          DEFAULT: "#6E665D",
          faint: "#9C9389",
        },
        line: {
          DEFAULT: "rgba(34,28,23,0.10)",
          strong: "rgba(34,28,23,0.18)",
          light: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
        mono: ["'Geist Mono'", "'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        eyebrow: "0.32em",
      },
      borderRadius: {
        card: "18px",
        xl2: "26px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      boxShadow: {
        lift: "0 24px 60px -28px rgba(34,28,23,0.30)",
        emberglow: "0 0 0 1px rgba(238,123,71,0.30), 0 20px 60px -18px rgba(238,123,71,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseflow: {
          "0%,100%": { opacity: "0.55", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.06)" },
        },
        drift: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spark: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "12%": { opacity: "1" },
          "100%": { transform: "translateY(-220px)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        pulseflow: "pulseflow 3.2s ease-in-out infinite",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
