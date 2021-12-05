module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
