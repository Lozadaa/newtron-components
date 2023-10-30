import { createTheme } from "@mui/material";

const defaultColors: ColorType = {
  primary: '#DB2E1D',
  secondary: '#DB6D16',
}

export type ColorType = {
  [key: string]: string,
}

const theme = (colorsProp = defaultColors) => createTheme({
  palette: {
    primary: {
      main: colorsProp.primary,
    },
    secondary: {
      main: colorsProp.secondary,
    },
  },
  shape:{
    borderRadius: 1,
  },
  typography: {
    allVariants: {
      color: "white"
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colorsProp.primary,
        }
      }
    }
  }
});

export default theme;