/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
        typewriter: "typewriter 3s steps(9) forwards infinite 6s",
        caret: "typewriter 3s steps(9) forwards infinite 6s, blink 1s steps(9)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        typewriter: {
          "to": { left: "100%" },
        },
        blink: {
          "0%, 50.1%, 100%": { opacity: "0" },
          "0.1%, 50%": { opacity: "1" },
        },
      },
      fontFamily: {
        signature: ["League Gothic"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bgc: "#535878",
      beige: "#e9c46a",
      purple: "#3f3cbb",
      social: "#264653",
      nav: "#eecc8c",
      white: "#e5e5e5",
      black: "#000000",
      yellow: "#ffff00",
      cream: "#f8efe4",
      blue: "#254c6d",
      gray: "#d3d3d3",
    },
  },
  plugins: [],
};
