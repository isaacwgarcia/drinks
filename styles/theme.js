import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blueGrey, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: amber,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
