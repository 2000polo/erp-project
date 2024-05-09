import { createTheme } from "@mui/material";
import { blue, green, grey, orange, pink, red, yellow } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark', // This specifies the theme mode as dark
    primary: {
      main: '#27272a', // Customize the primary color for dark theme
    },
    secondary: {
      main: pink[300], // Customize the secondary color for dark theme
    },
    background: {
      // default: '#191D29', // Customize the default background color for dark theme
      default: '#09090b', // Customize the default background color for dark theme
    },
    chip:{
      blue: blue[300],
      green: green[300],
      yellow: yellow[700],
      pink: pink[300],
      red: red[600],
      orange: orange[600]
    }
  },
  // Other dark theme customizations (typography, spacing, etc.) can be added here
});