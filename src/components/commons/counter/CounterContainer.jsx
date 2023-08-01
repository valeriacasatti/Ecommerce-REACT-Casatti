import { useState } from "react";
import Counter from "./Counter";
import { ToastContainer, toast } from "react-toastify";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : toast.error(`Solo tenemos ${stock} unidades!`);
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
