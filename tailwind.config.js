const { color } = require("framer-motion");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        fira: ["Fira Sans", "sans-serif"],
      },
      fontSize: {
        heading: "30px",
        regular: "18px",
      },
      colors: {
        primarytext: "#ffffff",
        accenty: "#f9fafb",
      },
      borderRadius: {
        standard: "14px",
      },
      boxShadow: {
        "custom-light":
          "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(25, 28, 33, 0.02), 0 0 0 1px rgba(25, 28, 33, 0.08)",
        "custom-dark":
          "0 2px 4px rgba(255, 255, 255, 0.1), 0 1px 0 rgba(25, 28, 33, 0.02), 0 0 0 1px rgba(25, 28, 33, 0.08)",
      },
      keyframes: {
        "jump-in": {
          "0%": { transform: "scale(0)" },
          "80%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "jump-in": "jump-in 1s ease-out 1 both",
        "fade-up": "fade-up 1s ease-out both",
      },
    },
  },
  plugins: [],
};
