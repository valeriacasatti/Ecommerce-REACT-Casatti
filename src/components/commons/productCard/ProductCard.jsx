/* eslint-disable react/prop-types */
import "./ProductCard.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import CounterContainer from "../../commons/counter/CounterContainer";
import { useState } from "react";

const ProductCard = ({ item, onAdd, quantityInCart }) => {
  // menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />

        <Card className="card">
          {/* item */}
          <Link to={`/itemDetail/${item.id}`}>
            <CardMedia component="img" alt={item.title} image={item.img} />

            <CardContent className="cardContainer">
              <Typography
                variant="h6"
                component="div"
                textTransform={"uppercase"}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" paddingBottom={3} borderBottom={1}>
                {item.description}
              </Typography>
            </CardContent>
          </Link>

          {/* add to cart */}
          <CardActions>
            {item.stock === 0 ? (
              <Button disabled>out of stock</Button>
            ) : (
              <>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  add to cart
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  {item.stock > quantityInCart && item.stock > 0 && (
                    <CounterContainer
                      itemStock={item.stock}
                      onAdd={onAdd}
                      quantityInCart={quantityInCart}
                    />
                  )}
                  {quantityInCart === item.stock && (
                    <MenuItem>
                      <Box className="goToCart">
                        <h6>
                          you reached the max number of units in your cart
                        </h6>
                        <Button component={Link} to="/cart">
                          go to cart
                        </Button>
                      </Box>
                    </MenuItem>
                  )}
                </Menu>
              </>
            )}
          </CardActions>
        </Card>
      </ThemeProvider>
    </>
  );
};

export default ProductCard;
