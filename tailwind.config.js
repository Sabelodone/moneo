/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "netflix-red": "#e50914",
        "netflix-black": "#141414",
        "netflix-gray": "#2f2f2f",
        "netflix-dark-gray": "#181818",
        "netflix-light-gray": "#b3b3b3",
        "gold-accent": "#e50914", // Netflix red as accent
      },
      fontFamily: {
        netflix: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      animation: {
        "floating-netflix": "floatingNetflix 8s ease-in-out infinite",
        "fade-in-netflix": "fadeInNetflix 1.2s ease-out",
      },
      keyframes: {
        floatingNetflix: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        fadeInNetflix: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}