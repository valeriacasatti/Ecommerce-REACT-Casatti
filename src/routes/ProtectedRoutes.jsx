import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let userRol = "admin";
  return <>{userRol !== "admin" ? <Navigate to={"/"} /> : <Outlet />}</>;
};

export default ProtectedRoutes;
