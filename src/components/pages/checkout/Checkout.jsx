/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  LinearProgress,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./Checkout.css";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import CheckoutProduct from "../../commons/checkoutProduct/CheckoutProduct";

const Checkout = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  cart,
  total,
  processingPayment,
}) => {
  const shippingTotal = values.deliveryMethod === "express" ? 100 : 0;
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        <Box className="checkoutContainer">
          <Box className="checkoutTitle">
            <h2>checkout</h2>
          </Box>
          <Box className="checkoutBox">
            <Box component="form" onSubmit={handleSubmit}>
              {/* contact */}
              <Box className="checkoutContact">
                <h4>contact information</h4>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="name"
                      type="text"
                      label="name"
                      variant="standard"
                      onChange={handleChange}
                      error={errors.name ? true : false}
                      helperText={errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="lastname"
                      type="text"
                      label="last name"
                      variant="standard"
                      onChange={handleChange}
                      error={errors.lastname ? true : false}
                      helperText={errors.lastname}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="email"
                      type="email"
                      label="email address"
                      variant="standard"
                      onChange={handleChange}
                      error={errors.email ? true : false}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="phone"
                      type="number"
                      label="phone number"
                      variant="standard"
                      onChange={handleChange}
                      error={errors.phone ? true : false}
                      helperText={errors.phone}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* delivery */}
              <Box className="checkoutDelivery">
                <h4>delivery method</h4>
                <RadioGroup
                  defaultValue="standard"
                  name="deliveryMethod"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="standard"
                    control={<Radio />}
                    label="Standard delivery (5-6 days) FREE"
                  />
                  <FormControlLabel
                    value="express"
                    control={<Radio />}
                    label="Express delivery (1-2 days) $100"
                  />
                </RadioGroup>
              </Box>

              {/* shipping */}
              <Box className="checkoutShipping">
                <h4>shipping information</h4>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="country"
                      type="text"
                      label="country"
                      variant="standard"
                      onChange={handleChange}
                      error={errors.country ? true : false}
                      helperText={errors.country}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="city"
                      type="text"
                      label="city"
                      variant="standard"
                      onChange={handleChange}
                      error={errors.city ? true : false}
                      helperText={errors.city}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="address"
                      type="text"
                      label="address"
                      variant="standard"
                      onChange={handleChange}
                      error={errors.address ? true : false}
                      helperText={errors.address}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="postalCode"
                      type="number"
                      label="postal code"
                      variant="standard"
                      onChange={handleChange}
                      error={errors.postalCode ? true : false}
                      helperText={errors.postalCode}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* payment */}
              <Box className="checkoutPayment">
                <h4>payment</h4>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="cardHolder"
                      type="text"
                      label="name on card"
                      variant="standard"
                      onChange={handleChange}
                      error={errors.cardHolder ? true : false}
                      helperText={errors.cardHolder}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="card"
                      type="text"
                      label="card number (credit or debit)"
                      variant="standard"
                      onChange={handleChange}
                      error={errors.card ? true : false}
                      helperText={errors.card}
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl
                      variant="standard"
                      fullWidth
                      error={errors.expMonth ? true : false}
                    >
                      <InputLabel id="expiration-month-label">month</InputLabel>
                      <Select
                        labelId="expiration-month-label"
                        id="expiration-month"
                        name="expMonth"
                        value={values.expMonth || ""}
                        label="month"
                        onChange={handleChange}
                      >
                        {Array.from({ length: 12 }, (_, i) => {
                          const month = (i + 1).toString().padStart(2, "0");
                          return (
                            <MenuItem key={month} value={month}>
                              {month}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      <FormHelperText>{errors.expMonth}</FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl
                      variant="standard"
                      fullWidth
                      error={errors.expYear ? true : false}
                    >
                      <InputLabel id="expiration-year-label">year</InputLabel>
                      <Select
                        labelId="expiration-year-label"
                        id="expiration-year"
                        name="expYear"
                        value={values.expYear || ""}
                        label="year"
                        onChange={handleChange}
                      >
                        {Array.from({ length: 10 }, (_, i) => {
                          const year = new Date().getFullYear() + i;
                          return (
                            <MenuItem key={year} value={year}>
                              {year}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      <FormHelperText>{errors.expYear}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      name="securityCode"
                      type="text"
                      label="CVV"
                      variant="standard"
                      onChange={handleChange}
                      error={errors.securityCode ? true : false}
                      helperText={errors.securityCode}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box className="orderTotal">
                <Typography>subtotal: ${total}</Typography>
                <Typography>
                  shipping: {shippingTotal === 0 ? "FREE" : "$100"}
                </Typography>
                <Typography variant="h5">
                  total: ${total + shippingTotal}
                </Typography>
              </Box>
              {processingPayment ? (
                <LinearProgress color="primary" />
              ) : (
                <Button type="submit" variant="outlined">
                  go pay
                </Button>
              )}
            </Box>

            {/* order details */}
            <Box className="orderDetails">
              <h4>your order</h4>
              {cart.map((item) => {
                return <CheckoutProduct key={item.id} item={item} />;
              })}
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Checkout;
