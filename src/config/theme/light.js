import { createTheme } from "@mui/material";
import { blue, green, grey, orange, pink, red, yellow } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
      mode: 'light', // This specifies the theme mode as light
      primary: {
        main: blue[900], // Customize the primary color for light theme
      },
      secondary: {
        main: pink[500], // Customize the secondary color for light theme
      },
      background: {
        default: grey[200], // Customize the default background color for light theme
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
    // Other light theme customizations (typography, spacing, etc.) can be added here
});