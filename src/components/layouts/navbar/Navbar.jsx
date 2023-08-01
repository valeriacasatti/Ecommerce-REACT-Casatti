import "./Navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "../../commons/cartWidget/CartWidget";
import { ThemeProvider } from "@emotion/react";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import { Box, CssBaseline } from "@mui/material";

const Navbar = () => {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />
      <Box>
        <nav>
          <Link to="/" className="navLogo">
            valeria
          </Link>
          <Link to="/catalog" className="navList">
            catalog
          </Link>
          <Link to="/category/top" className="navList">
            top
          </Link>
          <Link to="/category/bottom" className="navList">
            bottom
          </Link>
          <Link to="/category/full" className="navList">
            full
          </Link>
          <CartWidget />
        </nav>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
