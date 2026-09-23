/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          soft: "#121B2E",
          line: "#1F2A40",
        },
        paper: {
          DEFAULT: "#F5F6F2",
          soft: "#FFFFFF",
          line: "#E3E4DE",
        },
        amber: {
          DEFAULT: "#FFB454",
          dim: "#C98A34",
        },
        mint: {
          DEFAULT: "#5EE6C7",
          dim: "#2E9C86",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
