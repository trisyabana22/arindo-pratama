/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "Sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
