module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        "orbit-blue": "#1972B5",
        "orbit-yellow": "#E3A836",
      },
      maxWidth: {
        64: "256px",
      },
      minWidth: {
        64: "256px",
      },
      width: {
        194: "48rem",
      },
    },
  },
  plugins: [],
};
