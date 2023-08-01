import { grey, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const ThemeConfig = createTheme({
  palette: {
    mode: "dark",
    primary: pink,
    secondary: grey,
  },
});

export default ThemeConfig;
