import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import "./FrontPage.css";
import { Link } from "react-router-dom";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import { useEffect, useState } from "react";

const FrontPage = () => {
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const storedOrderId = localStorage.getItem("orderId");
    if (storedOrderId) {
      setOrderId(storedOrderId);
      localStorage.removeItem("orderId");
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        {orderId ? (
          // page after purchasing
          <Box className="endPurchase">
            <Box>
              <img
                src="https://res.cloudinary.com/dqrgdohtt/image/upload/v1690894481/endPurchase_vkgtoo.jpg"
                alt=""
              />
            </Box>
            <Box className="endPurchaseText">
              <h2>thanks for shopping with us honey🤍</h2>
              <h5>
                your purchase number is: <span>{orderId}</span>{" "}
              </h5>
              <Link to="/catalog">
                <Button>repurchase please</Button>
              </Link>
            </Box>
          </Box>
        ) : (
          // main page
          <Box className="frontPage">
            <img
              src="https://res.cloudinary.com/dqrgdohtt/image/upload/v1687375243/products/frontPage.png"
              alt="frontPage"
            />
            <Box className="frontPageText">
              <h2>hey! i&apos;m Valeria</h2>
              <p>
                This brand was created with my power girls in mind, women who
                seek to express their strength and feminine energy through
                garments that make them feel like the queens they are. I hope
                you identify as closely with this brand&apos;s personality as I
                do, and that you find the skirt, dress, or pants that represent
                your best values and maximize your beautiful qualities.
              </p>
              <Link to="/catalog">
                <Button>explore our style</Button>
              </Link>
            </Box>
          </Box>
        )}
      </ThemeProvider>
    </>
  );
};

export default FrontPage;
