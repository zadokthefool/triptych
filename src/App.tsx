import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PublicRoutes } from '@routes';

const theme = createTheme({
  typography: {
    fontFamily: `Sora, 'Open Sans', Roboto, monospace, sans-serif`,
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          fontSize: 'inherit',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          fontSize: 'inherit',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontFamily: 'inherit',
          fontSize: 'inherit',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          fontSize: 'inherit',
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PublicRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
