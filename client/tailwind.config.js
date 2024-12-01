/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F0F3F6",
        primary: "#527AF2",
        textColor: "#FFF",
        secondary: "#F0F3F6"
      },
      animation: {
        fade: "fadeOut 3s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

