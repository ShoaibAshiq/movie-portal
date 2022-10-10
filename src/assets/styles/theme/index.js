import { createTheme } from "@mui/material/styles";
import { COLORS } from "./../../../app.constant";
export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.tmdbDarkBlue,
    },
    secondary: {
      main: "#01C6AC",
    },
  },
});
