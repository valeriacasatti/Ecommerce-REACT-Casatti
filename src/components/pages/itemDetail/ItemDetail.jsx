import "./ItemDetail.css";
import CounterContainer from "../../commons/counter/CounterContainer";
import { ThemeProvider } from "@emotion/react";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import { Box, Button, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ItemDetail = ({ items, onAdd, initial }) => {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        <div className="itemDetail">
          <div>
            <img src={items.img} alt={items.title} />
          </div>
          <div className="itemDetailRight">
            <h2>{items.title}</h2>
            <h3>${items.price}</h3>

            {(typeof initial === "undefined" || items.stock > initial) &&
              items.stock > 0 && (
                <CounterContainer
                  stock={items.stock}
                  onAdd={onAdd}
                  initial={initial}
                />
              )}

            {items.stock === 0 && <h6>out of stock 🥺</h6>}

            {typeof initial !== "undefined" && initial === items.stock && (
              <Box className="goToCart">
                <h6>you reached the max number of units in your cart</h6>
                <Link to="/cart">
                  <Button>go to cart</Button>
                </Link>
              </Box>
            )}

            <div>
              <h4>product details</h4>
              <h5>{items.description}</h5>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default ItemDetail;
