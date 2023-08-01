import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import "./FrontPage.css";
import { Link } from "react-router-dom";
import ThemeConfig from "../../themeConfig/ThemeConfig";

const FrontPage = () => {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />

        <div className="frontPage">
          <img
            src="https://res.cloudinary.com/dqrgdohtt/image/upload/v1687375243/products/frontPage.png"
            alt="frontPage"
          />
          <div className="frontPageText">
            <h2>hey! i'm valeria</h2>
            <p>
              This brand was thought and created for my powerpuff girls who seek
              to express their power and feminine energy by wearing clothes that
              make them feel like the queens they are.
            </p>
            <p>
              I hope you feel as identified with the personality of this brand
              as I do
            </p>
            <p>
              I hope you find that skirt, dress or pants that represents your
              best values and maximizes your beautiful qualities.
            </p>
            <Link to="/catalog">
              <Button>explore our style</Button>
            </Link>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default FrontPage;
