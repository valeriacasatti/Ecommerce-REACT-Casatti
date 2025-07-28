/* eslint-disable react/prop-types */
import { useState } from "react";
import Counter from "./Counter";
import { toast, ToastContainer } from "react-toastify";

const CounterContainer = ({ itemStock, onAdd, quantityInCart }) => {
  const availableQuantity = itemStock - quantityInCart;
  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < availableQuantity
      ? setContador(contador + 1)
      : toast.error("you have reached the maximum number of units available");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <>
      <Counter
        contador={contador}
        sumar={sumar}
        restar={restar}
        onAdd={onAdd}
      />
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

export default CounterContainer;
