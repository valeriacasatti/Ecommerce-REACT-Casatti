/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // save cart in local storage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add items to cart
  const addToCart = (item) => {
    const exists = cart.find((el) => item.id === el.id);

    // if exists in cart, update quantity
    if (exists) {
      const newQuantity = item.quantity + exists.quantity;

      // if new quantity is less than or equal to stock, update quantity
      if (newQuantity <= item.stock) {
        exists.quantity = newQuantity;
        setCart([...cart]);
        return {
          success: true,
          message: `${newQuantity} units of ${item.title} added to cart successfully`,
        };
        // if new quantity exceeds stock
      } else {
        return {
          success: false,
          message: `we only have ${
            item.stock - exists.quantity
          } units left of ${item.title}`,
        };
      }

      // if not exists in cart
    } else {
      // and quantity is less than or equal to stock, add to cart
      if (item.quantity <= item.stock) {
        setCart([...cart, { ...item }]);
        return {
          success: true,
          message: `${item.title} added to cart successfully`,
        };
        // if quantity exceeds stock
      } else {
        return {
          success: false,
          message: `you can't add ${item.quantity}, we only have ${item.stock} units in stock`,
        };
      }
    }
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // delete item by id
  const deleteById = async (id) => {
    let newArray = cart.filter((item) => item.id !== id);
    setCart(newArray);
  };

  // exists item in cart?
  const isInCart = (id) => {
    let exist = cart.some((item) => item.id === id);
    return exist;
  };

  // total cart amount
  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  // total quantity of items in cart
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  // get total quantity of item in cart
  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product ? product.quantity : 0;
  };

  // increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === id);

      if (item.quantity >= item.stock) {
        toast.error(`We only have ${item.stock} units of ${item.title}`);
        return prevCart;
      }

      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  // decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    isInCart,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById,
    increaseQuantity,
    decreaseQuantity,
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
