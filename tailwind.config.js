module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto']
    },
    extend: {
      colors: {
        "fig-black" : "#222222",
      }
    },
  },
  variants: {
    extend: {
      fontSize: ['hover'],
    },
  },
  plugins: [],
}
