import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CssBaseline,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartProduct = ({ item }) => {
  const { deleteById } = useContext(CartContext);
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: 200,
            borderRadius: "0%",
            mr: 10,
            mb: 5,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              width: "1000%",
              height: 200,
              borderRadius: "0%",
              display: "flex",
              ml: 13,
              mb: 5,
            }}
          >
            <CardActionArea sx={{ display: "flex" }}>
              <Link to={`/itemDetail/${item.id}`}>
                <CardMedia
                  component="img"
                  height="100"
                  image={item.img}
                  alt={item.title}
                  sx={{ width: 200 }}
                ></CardMedia>
              </Link>

              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  sx={{ display: "flex", pl: 1, pb: 1 }}
                  gutterBottom
                  variant="h6"
                  component="div"
                  textTransform={"uppercase"}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ display: "flex", pl: 1, pb: 5 }}
                  variant="body2"
                  color="text.secondary"
                >
                  ${item.price}
                </Typography>
                <Typography
                  sx={{ display: "flex", pl: 1, pb: 1 }}
                  variant="body2"
                  color="text.secondary"
                >
                  total: {item.quantity}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Button onClick={() => deleteById(item.id)} color="secondary">
            <ClearIcon fontSize="small" />
          </Button>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default CartProduct;
