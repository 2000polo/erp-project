import { createTheme } from "@mui/material";
import { blue, grey, pink } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark', // This specifies the theme mode as dark
    primary: {
      main: blue[900], // Customize the primary color for dark theme
    },
    secondary: {
      main: pink[300], // Customize the secondary color for dark theme
    },
    background: {
      default: '#191D29', // Customize the default background color for dark theme
    },
  },
  // Other dark theme customizations (typography, spacing, etc.) can be added here
});