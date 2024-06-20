import { createTheme } from "@mui/material";
import { blue, green, grey, orange, pink, purple, red, teal, yellow, deepOrange } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark', // This specifies the theme mode as dark
    primary: {
      main: '#27272a', // Customize the primary color for dark theme
    },
    secondary: {
      main: blue[900], // Customize the secondary color for dark theme
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
      orange: orange[600],
      good_first_issue: red['A400'],
      modification: blue[600],
      feature: purple[600],
      suggestion: orange[600],
      enchancement: teal[500],
      hot_fix: deepOrange['A400'],
    },
    task_status: {
      open: blue[800],
      closed: teal[500],
      "in progress": yellow[800]
    }

  },
  // Other dark theme customizations (typography, spacing, etc.) can be added here
});