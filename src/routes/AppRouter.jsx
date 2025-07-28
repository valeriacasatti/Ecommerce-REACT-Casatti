import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/layout/Layout";
import Error404 from "../components/pages/error404/Error404";
import { routes } from "./routes";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardContainer from "../components/pages/dashboard/DashboardContainer";
import ScrollToTop from "../components/commons/scrollToTop/ScrollToTop";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {/* rutas publicas */}
          {routes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}

          {/* rutas protegidas */}
          <Route element={<ProtectedRoutes />}>
            <Route path="dashboard" element={<DashboardContainer />} />
            <Route path="checkout" element={<CheckoutContainer />} />
          </Route>
        </Route>

        {/* pagina de error */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default AppRouter;
