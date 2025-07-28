/* eslint-disable react/prop-types */
import "./Counter.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ThemeProvider } from "@emotion/react";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import { Box, Button, CssBaseline, IconButton } from "@mui/material";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        <Box className="counter">
          <Button onClick={sumar}>
            <AddIcon fontSize="small" />
          </Button>
          <h5>{contador}</h5>
          <Button onClick={restar}>
            <RemoveIcon fontSize="small" />
          </Button>
          <IconButton
            onClick={() => onAdd(contador)}
            color="primary"
            size="large"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Counter;
