import { useContext, useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const ProtectedRoutes = () => {
  const [userPermission, setUserPermission] = useState(null);
  const [redirectPath, setRedirectPath] = useState(null);

  const { cart } = useContext(CartContext);
  const location = useLocation();

  useEffect(() => {
    const checkAccess = async () => {
      setUserPermission(null);
      setRedirectPath(null);

      const path = location.pathname;

      // dashboard
      if (path === "/dashboard") {
        const { value: userRol } = await Swal.fire({
          backdrop: `rgba(0,0,0,0.8)`,
          background: "#121212",
          color: "#f5f5f5",
          title: "to access the dashboard, please enter your user role",
          input: "text",
          inputPlaceholder: "submit your user rol",
          footer: "if you want to test the app, use 'admin'",
          confirmButtonColor: "#00c42e",
        });
        if (userRol == "admin") {
          setUserPermission(true);
        } else {
          await Swal.fire({
            backdrop: `rgba(0,0,0,0.8)`,
            background: "#121212",
            color: "#f5f5f5",
            title: "access denied",
            footer: "you do not have permission to access this section.",
            icon: "error",
            iconColor: "#e91e63",
            confirmButtonColor: "#e91e63",
            allowOutsideClick: false,
            allowEscapeKey: false,
          });
          setUserPermission(false);
          setRedirectPath("/");
        }
        // checkout
      } else if (path === "/checkout") {
        if (!cart || cart.length === 0) {
          await Swal.fire({
            backdrop: `rgba(0,0,0,0.8)`,
            background: "#121212",
            color: "#f5f5f5",
            title: "empty cart",
            footer:
              "you need to add products to your cart to access the checkout.",
            icon: "error",
            iconColor: "#e91e63",
            confirmButtonColor: "#e91e63",
          });
          setUserPermission(false);
          setRedirectPath("/");
        } else {
          setUserPermission(true);
        }
      } else {
        setUserPermission(true);
      }
    };
    checkAccess();
  }, [location.pathname, cart]);

  if (userPermission === null && !redirectPath) return <div></div>;

  if (redirectPath) return <Navigate to={redirectPath} replace />;

  // if (userPermission === false) return <Navigate to={"/"} replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
