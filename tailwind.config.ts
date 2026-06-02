import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        ink: "#0B0B0B", // Deep Black
        ivory: "#FAF9F6", // Ivory White
        // Dark surfaces (depth layers)
        onyx: "#080808", // Deepest
        charcoal: "#121212", // Elevated surface
        graphite: "#1A1A1A", // Card / hover surface
        // Secondary
        gold: "#C8A86B", // Warm Gold
        goldlight: "#E2CB98", // Lighter gold for gradients
        beige: "#EDE7DD", // Soft Beige
        // Accent
        warmgray: "#6F6F6F", // Warm Gray
        bronze: "#8B6F47", // Muted Bronze
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
        wider2: "0.32em",
      },
      maxWidth: {
        container: "1320px",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(110deg, #C8A86B 0%, #E2CB98 35%, #C8A86B 55%, #8B6F47 100%)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(200,168,107,0.18) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(200,168,107,0.45)",
        "glow-sm": "0 0 40px -12px rgba(200,168,107,0.35)",
        elevated: "0 30px 80px -40px rgba(0,0,0,0.9)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "scroll-hint": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "60%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slow-zoom": "slow-zoom 16s ease-out forwards",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 38s linear infinite",
        "marquee-fast": "marquee 24s linear infinite",
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "scroll-hint": "scroll-hint 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
