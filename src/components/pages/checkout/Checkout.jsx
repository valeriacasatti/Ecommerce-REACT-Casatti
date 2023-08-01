import {
  Box,
  Button,
  CssBaseline,
  TextField,
  ThemeProvider,
} from "@mui/material";
import "./Checkout.css";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import { Link } from "react-router-dom";

const Checkout = ({ handleSubmit, handleChange, errors, pay, orderId }) => {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        {orderId ? (
          <Box className="endPurchase">
            <Box>
              <img
                src="https://res.cloudinary.com/dqrgdohtt/image/upload/v1690894481/endPurchase_vkgtoo.jpg"
                alt=""
              />
            </Box>
            <Box>
              <h2>thanks for shopping with us honey 🤍</h2>
              <h5>your purchase number is: {orderId}</h5>
              <Link to="/catalog">
                <Button>repurchase please</Button>
              </Link>
            </Box>
          </Box>
        ) : (
          <Box className="checkout">
            <Box className="checkoutBox">
              <Box className="checkoutTitle">
                <h2>checkout</h2>
              </Box>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  name="name"
                  type="text"
                  label="Full name"
                  variant="standard"
                  style={{
                    width: "200%",
                    display: "block",
                    marginBottom: "10px",
                  }}
                  onChange={handleChange}
                  error={errors.name ? true : false}
                  helperText={errors.name}
                />
                <TextField
                  fullWidth
                  name="email"
                  type="text"
                  label="Email"
                  variant="standard"
                  style={{
                    width: "200%",
                    display: "block",
                    marginBottom: "10px",
                  }}
                  onChange={handleChange}
                  error={errors.email ? true : false}
                  helperText={errors.email}
                />
                <TextField
                  fullWidth
                  name="card"
                  type="number"
                  label="Card number (credit or debit)"
                  variant="standard"
                  style={{
                    width: "200%",
                    display: "block",
                    marginBottom: "30px",
                  }}
                  onChange={handleChange}
                  error={errors.card ? true : false}
                  helperText={errors.card}
                />
                <TextField
                  fullWidth
                  name="expiration"
                  type="date"
                  // label="Expiration date"
                  variant="standard"
                  style={{
                    width: "200%",
                    display: "block",
                    marginBottom: "20px",
                  }}
                  onChange={handleChange}
                  error={errors.expiration ? true : false}
                  helperText={errors.expiration}
                />
                <TextField
                  fullWidth
                  name="securityCode"
                  type="number"
                  label="Security code"
                  variant="standard"
                  style={{
                    width: "200%",
                    display: "block",
                    marginBottom: "20px",
                  }}
                  onChange={handleChange}
                  error={errors.securityCode ? true : false}
                  helperText={errors.securityCode}
                />
                <TextField
                  fullWidth
                  name="address"
                  type="string"
                  label="Billing address"
                  variant="standard"
                  style={{
                    width: "200%",
                    display: "block",
                    marginBottom: "40px",
                  }}
                  onChange={handleChange}
                  error={errors.address ? true : false}
                  helperText={errors.address}
                />

                <Button onClick={pay} type="submit">
                  go pay
                </Button>
              </form>
            </Box>
            <Box>
              <img
                src="https://res.cloudinary.com/dqrgdohtt/image/upload/v1690473536/checkout_dpolg2.jpg"
                alt="checkout"
              />
            </Box>
          </Box>
        )}
      </ThemeProvider>
    </>
  );
};

export default Checkout;
