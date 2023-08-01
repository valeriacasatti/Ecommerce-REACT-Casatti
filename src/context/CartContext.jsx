import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existe = isInCart(item.id);

    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === item.id) {
          return { ...elemento, quantity: item.quantity };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArray = cart.filter((item) => item.id !== id);
    setCart(newArray);
    toast.error(`removed from cart!`);
  };

  const isInCart = (id) => {
    let exist = cart.some((item) => item.id === id);
    return exist;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById,
    isInCart,
  };

  return (
    <>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default CartContextProvider;
