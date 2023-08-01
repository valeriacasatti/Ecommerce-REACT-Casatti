import { ThemeProvider } from "@emotion/react";
import ThemeConfig from "../../themeConfig/ThemeConfig";
import { Box, CssBaseline, Skeleton } from "@mui/material";

const ProductSkeleton = () => {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        <Box>
          <Skeleton variant="rectangular" sx={{ width: 390, height: 575 }} />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ProductSkeleton;
