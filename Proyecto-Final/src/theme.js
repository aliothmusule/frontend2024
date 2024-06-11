import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc0cb', // Rosa pastel
    },
    secondary: {
      main: '#ffffff', // Blanco para los botones
    },
    text: {
      primary: '#000000', // Texto negro
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#f0d7eb', // Blanco para los botones
          color: '#000000', // Texto negro
          '&:hover': {
            backgroundColor: '#f0f0f0', // Un poco más oscuro en hover
          },
        },
      },
    },
  },
});

export default theme;
