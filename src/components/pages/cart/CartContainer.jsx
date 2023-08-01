import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import CartEmpty from "../../commons/cartEmpty/CartEmpty";

const CartContainer = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();

  const handleClearCart = () => {
    Swal.fire({
      backdrop: `rgba(0,0,0,0.8)`,
      background: "#121212",
      color: "#f5f5f5",
      title: "are u sure u want to clear cart? ",
      showDenyButton: true,
      confirmButtonText: "yes",
      denyButtonText: `please no`,
      confirmButtonColor: "#00c42e",
      denyButtonColor: "#e91e63",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          backdrop: `rgba(0,0,0,0.8)`,
          background: "#121212",
          color: "#f5f5f5",
          title: "cart cleaned successfully",
          icon: "success",
          iconColor: "#00c42e",
          confirmButtonColor: "#00c42e",
        });
        clearCart();
      } else if (result.isDenied) {
        Swal.fire({
          backdrop: `rgba(0,0,0,0.8)`,
          background: "#121212",
          color: "#f5f5f5",
          title: "your cart was't modified",
          confirmButtonColor: "#e91e63",
        });
      }
    });
  };

  return (
    <>
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <Cart cart={cart} handleClearCart={handleClearCart} total={total} />
      )}
    </>
  );
};

export default CartContainer;
