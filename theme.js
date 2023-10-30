import { h as e } from "./createTheme-e8cea0f8.js";
import "./_commonjsHelpers-d4512b9c.js";
const r = {
  primary: "#DB2E1D",
  secondary: "#DB6D16"
}, i = (a = r) => e({
  palette: {
    primary: {
      main: a.primary
    },
    secondary: {
      main: a.secondary
    }
  },
  shape: {
    borderRadius: 1
  },
  typography: {
    allVariants: {
      color: "white"
    }
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: a.primary
        }
      }
    }
  }
});
export {
  i as default
};
