import { createTheme } from "@mui/material";
import { blue, grey, pink } from "@mui/material/colors";

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
        default: grey[100], // Customize the default background color for light theme
      },
    },
    // Other light theme customizations (typography, spacing, etc.) can be added here
});