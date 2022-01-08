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
        "neon-dark-purple": "#BE00FE",
        "wpink": "rgba(255,204,226,1)",
        "darkRed": "#E94560",
        "darkSkin": "#ECDBBA"
      }
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        lg: "1124px",
        xl:"1124px",
        "2xl":"1124px"
      }
    },
    container2: {
      center: true,
      padding: "20px",
      screens: {
        lg: "1124px",
        xl:"1124px",
        "2xl":"1124px"
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      pacifo: ["Sanchez, serif"],
      balo: ["'Baloo Bhaijaan 2', cursive"],
      bioRhyme: ["'BioRhyme', serif"],
      mont: ["'Montserrat', sans-serif"],
      lobster: ["'Vollkorn', serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
