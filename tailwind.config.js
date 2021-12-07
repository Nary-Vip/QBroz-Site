module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "neon-green": "#39FF14",
        "neon-red": "#F72119",
        "neon-pink": "	#FF10F0",
        "neon-purple": "#DF00FE",
        "neon-dark-purple": "#BE00FE"
      }
    },
    container: {
      center: true,
      padding: "10px",
      screens: {
        lg: "1124px",
        xl:"1124px",
        "2xl":"1124px"
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      pacifo: ["Sanchez, serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
