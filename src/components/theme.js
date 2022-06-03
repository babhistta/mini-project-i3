import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#000751',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#BF35EF',
    },
    error: {
      // This is green.A700 as hex.
      main: '#E74C4C',
    },
    warning: {
      // This is green.A700 as hex.
      main: '#F1C835',
    },
    info: {
      // This is green.A700 as hex.
      main: '#5599F4',
      contrastText: '#fff',
    },
    success: {
      // This is green.A700 as hex.
      main: '#5BD37D',
      contrastText: '#fff',
    },
    background: {
      default: '#EFEFF5',
    },
    white: {
      default: '#fff',
    },
    black: {
      default: '#111111',
    },
  },

  typography: {
    fontFamily: ['Inter'],
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightBold: 600,
  },
});
