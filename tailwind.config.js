const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      spacing: {
        "56": "14rem",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
    },
    container: {
      center: true,
    },
    boxShadow: {
      outline: "0 0 0 3px rgba(255, 191, 71, 1)",
    },
    fontFamily: {
      sans: ["lato"],
      body: ["Noto Sans"],
    },
    screens: {
      xxs: "280px",
      xs: "325px",
      sm: "450px",
      md: "550px",
      lg: "768px",
      xl: "1024px",
    },
    colors: {
      red: {
        ...colors.red,
        100: "#f3e9e8",
        default: "#b10e1e",
      },
      white: {
        ...colors.white,
        default: "#FFF",
      },
      blue: {
        ...colors.blue,
        default: "#26374A",
        100: "#B2E3FF",
        200: "#DFF8FD",
        300: "#4B98B2",
        400: "#335075",
        500: "#75b9e0",
        600: "#007cba",
        700: "#335075",
        800: "#26374a"
      },
      gray: {
        ...colors.gray,
        default: "#EEE",
        selected: "#e1e4e7",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
      },
      yellow: {
        ...colors.yellow,
        default: "#ffbf47",
      },
      green: {
        ...colors.green,
        default: "#00703C",
        darker: "#002D18",
      },
      black: {
        ...colors.black,
        default: "#000",
      },
    },
    boxShadow: {
      result: '0px 0px 12px -2px rgba(0,0,0,0.4)',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '2.5': '2.5px',
      '3': '3px',
      '4': '4px',
      '8': '8px',
    },
    zIndex: { 
      '-1': '-1,',
      '100': '100,',
    },    
  },
  variants: {},  
};
