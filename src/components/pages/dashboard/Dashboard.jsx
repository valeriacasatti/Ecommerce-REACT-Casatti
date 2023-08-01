import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../productsMock";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const fill = () => {
    products.forEach((product) => {
      let refCollection = collection(db, "products");
      addDoc(refCollection, product);
    });
  };
  return (
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />

      <Box sx={{ marginTop: 5, marginLeft: 5 }}>
        <Button onClick={fill} sx={{ fontWeight: "bold", fontSize: "large" }}>
          fill dashboard{""}
        </Button>
        <Link to="/">
          <Button sx={{ fontWeight: "bold", fontSize: "large" }}>
            go home
          </Button>
        </Link>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
