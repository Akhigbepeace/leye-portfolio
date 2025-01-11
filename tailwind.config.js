/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#E0F11F",
      },

      fontFamily: {
        dm_sans: ["DM Sans", "serif"],
        big_shoulders_display: ["Big Shoulders Display", "serif"],
      },
    },
  },
  plugins: [],
};
