/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        off: "0 0px 20px 3px rgba(0, 0, 0, 0.3)",
        tipis: "0 0px 7px 0px rgba(0, 0, 0, 0.1)",
        on: "0 10px 80px 20px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        outfit: ["Outfit"],
        titillium: ["Titillium"],
        play: ["Play"],
      },
      backgroundColor: {
        bgDarkGradient:
          "radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scroll-snap-y": {
          scrollSnapType: "y mandatory",
        },
        ".snap-start": {
          scrollSnapAlign: "start",
        },
        ".snap-center": {
          scrollSnapAlign: "center",
        },
      };
      addUtilities(newUtilities);
    },
    require("tailwindcss-animated"),
  ],
};
