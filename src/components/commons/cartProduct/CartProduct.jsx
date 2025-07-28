/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Tooltip,
  Typography,
} from "@mui/material";

import ThemeConfig from "../../themeConfig/ThemeConfig";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartProduct = ({ item, handleDeleteById }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        <Card variant="outlined" className="itemCard">
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            {/* img */}
            <Box className="imgContainer">
              <Tooltip title="View product" placement="left">
                <Link to={`/itemDetail/${item.id}`}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.title}
                  ></CardMedia>
                </Link>
              </Tooltip>
            </Box>

            {/* item details */}
            <CardContent className="itemCardContent">
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                unit price: ${item.price}
              </Typography>

              {/* manage quantity */}
              <Box>
                <Button onClick={() => increaseQuantity(item.id)}>
                  <AddIcon fontSize="small" />
                </Button>

                <span>{item.quantity}</span>

                {item.quantity === 1 ? (
                  <Button onClick={() => handleDeleteById(item.id)}>
                    <DeleteOutlinedIcon fontSize="small" />
                  </Button>
                ) : (
                  <Button onClick={() => decreaseQuantity(item.id)}>
                    <RemoveIcon fontSize="small" />
                  </Button>
                )}
              </Box>

              <Typography
                variant="body1"
                color="text.secondary"
                textTransform="uppercase"
              >
                total price: ${item.quantity * item.price}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </ThemeProvider>
    </>
  );
};

export default CartProduct;
