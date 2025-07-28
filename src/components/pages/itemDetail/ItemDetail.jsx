/* eslint-disable react/prop-types */
import "./ItemDetail.css";
import CounterContainer from "../../commons/counter/CounterContainer";
import { ThemeProvider } from "@emotion/react";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import { Box, Button, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ItemDetail = ({ item, onAdd, quantityInCart }) => {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        <div className="itemDetail">
          <div>
            <img src={item.img} alt={item.title} />
          </div>
          <div className="itemDetailRight">
            <Button component={Link} to="/catalog">
              <ArrowBackIcon />
            </Button>
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>

            {item.stock === 0 ? (
              <Button disabled>out of stock 🥺</Button>
            ) : quantityInCart < item.stock ? (
              <CounterContainer
                itemStock={item.stock}
                onAdd={onAdd}
                quantityInCart={quantityInCart}
              />
            ) : (
              <Box className="goToCart">
                <h5>you reached the max number of units in your cart</h5>

                <Button component={Link} to="/cart">
                  go to cart
                </Button>
              </Box>
            )}

            <div>
              <h4>product details</h4>
              <h5>{item.description}</h5>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default ItemDetail;
