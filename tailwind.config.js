/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F2EEE3",
          raised: "#EAE3D1",
          line: "#D9D0B8",
        },
        ink: {
          DEFAULT: "#1B1912",
          muted: "#65614F",
          faint: "#8B8672",
        },
        void: {
          DEFAULT: "#15140F",
          raised: "#1E1C15",
          line: "rgba(242,238,227,0.12)",
        },
        bone: {
          DEFAULT: "#F2EEE3",
          muted: "#9A9686",
          faint: "#65614F",
        },
        rust: {
          DEFAULT: "#B24E2C",
          bright: "#D46A3E",
        },
      },
      fontFamily: {
        display: ["'Manrope'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        typeline: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
