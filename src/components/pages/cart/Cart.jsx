/* eslint-disable react/prop-types */
import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import CartProduct from "../../commons/cartProduct/CartProduct";
import "./Cart.css";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import { Link } from "react-router-dom";

const Cart = ({ cart, handleClearCart, handleDeleteById, total }) => {
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
          return (
            <CartProduct
              key={item.id}
              item={item}
              handleDeleteById={handleDeleteById}
            />
          );
        })}

        <Box className="totalCart">
          <h2 className="total">total</h2>
          <h4>total: ${total}</h4>
          <Button component={Link} to="/checkout" variant="outlined">
            conclude purchase
          </Button>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Cart;
