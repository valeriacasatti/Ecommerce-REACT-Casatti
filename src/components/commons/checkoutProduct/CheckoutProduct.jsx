/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Typography,
} from "@mui/material";
import "./CheckoutProduct.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import Swal from "sweetalert2";

const CheckoutProduct = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, deleteById, cart } =
    useContext(CartContext);

  const handleDeleteById = (id) => {
    const item = cart.find((item) => item.id === id);

    Swal.fire({
      backdrop: `rgba(0,0,0,0.8)`,
      background: "#121212",
      color: "#f5f5f5",
      title: `are u sure u want to delete ${item.title}? `,
      showDenyButton: true,
      confirmButtonText: "yes",
      denyButtonText: `please no`,
      confirmButtonColor: "#00c42e",
      denyButtonColor: "#e91e63",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          backdrop: `rgba(0,0,0,0.8)`,
          background: "#121212",
          color: "#f5f5f5",
          title: `${item.title} removed successfully!`,
          icon: "success",
          iconColor: "#00c42e",
          confirmButtonColor: "#00c42e",
        });
        deleteById(id);
      } else if (result.isDenied) {
        Swal.fire({
          backdrop: `rgba(0,0,0,0.8)`,
          background: "#121212",
          color: "#f5f5f5",
          title: `${item.title} was not eliminated`,
          confirmButtonColor: "#e91e63",
        });
      }
    });
  };

  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        <Card className="checkoutProductCard">
          {/* img */}
          <CardMedia
            component="img"
            image={item.img}
            alt={item.title}
          ></CardMedia>

          {/* content */}
          <CardContent className="cardContent">
            <Typography>{item.title}</Typography>
            <Box className="quantityContainer">
              <span>{item.quantity}</span>
              <Button onClick={() => increaseQuantity(item.id)}>
                <AddIcon fontSize="small" />
              </Button>

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
            <Typography>total: ${item.price * item.quantity}</Typography>
          </CardContent>
        </Card>
      </ThemeProvider>
    </>
  );
};

export default CheckoutProduct;
