import "./CartWidget.css";
import { ThemeProvider } from "@emotion/react";
import { Badge, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import CssBaseline from "@mui/material/CssBaseline";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <>
      <Link to="/cart">
        <ThemeProvider theme={ThemeConfig}>
          <CssBaseline />
          <Box className="box">
            <Badge badgeContent={total} color="primary">
              <ShoppingBasketOutlinedIcon fontSize="medium" />
            </Badge>
          </Box>
        </ThemeProvider>
      </Link>
    </>
  );
};

export default CartWidget;
