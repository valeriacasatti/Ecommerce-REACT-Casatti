/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  CssBaseline,
  LinearProgress,
  ThemeProvider,
  Tooltip,
} from "@mui/material";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./Dashboard.css";

const Dashboard = ({
  fillDashboard,
  fillingDashboard,
  emptyDashboard,
  emptyingDashboard,
}) => {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />

      <Box className="dashboardContainer">
        <Tooltip title="add products to the catalog" placement="left">
          <Button
            onClick={fillDashboard}
            disabled={fillingDashboard || emptyingDashboard}
            variant="contained"
            color="primary"
          >
            {fillingDashboard ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>filling...</span>
                <LinearProgress
                  color="primary"
                  sx={{ width: "100%", mt: 0.5, borderRadius: 2, height: 4 }}
                />
              </Box>
            ) : (
              <span>fill dashboard</span>
            )}
          </Button>
        </Tooltip>
        <Tooltip title="removes products from the catalog" placement="right">
          <Button
            onClick={emptyDashboard}
            disabled={fillingDashboard || emptyingDashboard}
            variant="outlined"
            color="primary"
          >
            {emptyingDashboard ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>emptying...</span>
                <LinearProgress
                  color="primary"
                  sx={{ width: "100%", mt: 0.5, borderRadius: 2, height: 4 }}
                />
              </Box>
            ) : (
              <span>empty dashboard</span>
            )}
          </Button>
        </Tooltip>
        <Tooltip title="return to the main page" placement="bottom">
          <Link to="/">
            <Button>go home</Button>
          </Link>
        </Tooltip>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          theme="dark"
        />
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
