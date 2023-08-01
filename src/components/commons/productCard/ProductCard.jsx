import "./ProductCard.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import ThemeConfig from "../../themeConfig/ThemeConfig";

const ProductCard = ({ item }) => {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        <Card sx={{ width: 390, borderRadius: "0%" }} className="card">
          <CardMedia component="img" alt={item.title} image={item.img} />
          <CardContent>
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
          <CardActions>
            <Link to={`/itemDetail/${item.id}`}>
              <Button>Show more</Button>
            </Link>
          </CardActions>
        </Card>
      </ThemeProvider>
    </>
  );
};

export default ProductCard;
