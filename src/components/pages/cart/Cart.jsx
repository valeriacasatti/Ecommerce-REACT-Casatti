import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import CartProduct from "../../commons/cartProduct/CartProduct";
import "./Cart.css";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const Cart = ({ cart, handleClearCart, total }) => {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        <Box className="cart">
          <Box className="cartTitle">
            <h5>shipping cart</h5>
            <h2>cart</h2>
          </Box>

          <Button onClick={handleClearCart}>clear cart</Button>
        </Box>

        {cart.map((item) => {
          return <CartProduct key={item.id} item={item} />;
        })}

        <Box className="totalCart">
          <h2 className="total">total</h2>
          <h4>total: ${total}</h4>
          <Link to="/checkout">
            <Button>conclude purchase</Button>
          </Link>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Cart;
