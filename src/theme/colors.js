/* Colors are currently used outside as well, primary color and text dark are used in index.css and secondary color used in landing page */
const colors = {
  text: {
    dark: {
      high: "#333333",
      medium: "#555555",
      disabled: "rgba(0, 0, 0, 0.48)",
    },
    light: {
      medium: "rgba(255, 255, 255, 0.64)",
      high: "rgba(255, 255, 255, 1)",
      disabled: "rgba(255, 255, 255, 0.48)",
    },
  },
  primary: "#E91D63",
  primaryHover: "#ED417C",
  primaryShade: "#FCE4EC",
  offwhite: "#F9F9F9",
  offblack: "#080808",
  darkgray: "#424242", // Used in input & text area borders only
  lighten: {
    low: "rgba(255, 255, 255, 0.04)",
    medium: "rgba(255, 255, 255, 0.16)",
    high: "rgba(255, 255, 255, 0.24)",
  },
  darken: {
    low: "rgba(0, 0, 0, 0.04)",
    medium: "rgba(0, 0, 0, 0.16)",
    high: "rgba(0, 0, 0, 0.24)",
  },
};

export default colors;
