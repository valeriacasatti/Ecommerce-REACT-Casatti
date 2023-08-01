import { ThemeProvider } from "@emotion/react";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import "./Error404.css";
import { Link } from "react-router-dom";
import { Button, CssBaseline } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

const Error404 = () => {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />

        <div className="error404">
          <div>
            <h1>So sorry🥺</h1>
            <h4>error 404</h4>
            <h6>Not Found</h6>
            <Link to={"/"}>
              <Button
                size="small"
                startIcon={<WestIcon />}
                variant="elevated"
                className="button404"
              >
                go back
              </Button>
            </Link>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Error404;
