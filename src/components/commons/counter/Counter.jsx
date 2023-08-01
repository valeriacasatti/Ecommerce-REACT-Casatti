import "./Counter.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
          <h6>{contador}</h6>
          <Button
            onClick={sumar}
            color="secondary"
            size="small"
            variant="elevated"
          >
            <KeyboardArrowUpIcon fontSize="small" />
          </Button>
          <Button
            onClick={restar}
            color="secondary"
            size="small"
            variant="elevated"
          >
            <KeyboardArrowDownIcon fontSize="small" />
          </Button>
        </Box>
        <Box>
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
