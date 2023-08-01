import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./CartEmpty.css";
import ThemeConfig from "../../themeConfig/ThemeConfig";
const CartEmpty = () => {
  toast.warning("CART IS EMPTY!");
  return (
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />

      <Box className="cartEmpty">
        <h2>cart is empty!</h2>
        <h2>🥺</h2>
        <Link to="/catalog">
          <Button>go to catalog</Button>
        </Link>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="dark"
        />
      </Box>
    </ThemeProvider>
  );
};

export default CartEmpty;
