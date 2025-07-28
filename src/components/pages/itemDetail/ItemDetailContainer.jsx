import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const [item, setItem] = useState({});

  const { id } = useParams();

  const quantityInCart = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...item, quantity: cantidad };
    const result = addToCart(productCart);
    if (result.success) {
      toast.success(result.message, {});
    } else {
      toast.error(result.message, {});
    }
  };

  return (
    <>
      <ItemDetail item={item} onAdd={onAdd} quantityInCart={quantityInCart} />

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
      />
    </>
  );
};

export default ItemDetailContainer;
