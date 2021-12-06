module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "neon-green": "#39FF14"
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl:"1124px",
        "2xl":"1124px"
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
