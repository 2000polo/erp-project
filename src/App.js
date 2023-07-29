import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from './config/routes';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from './config/theme/light';
import { darkTheme } from './config/theme/dark';

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
