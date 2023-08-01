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

  const [items, setItems] = useState({});

  const { id } = useParams();

  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setItems({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...items, quantity: cantidad };
    addToCart(productCart);

    toast.success(`${items.title} added to cart`, {});
  };

  return (
    <>
      <ItemDetail items={items} onAdd={onAdd} initial={totalQuantity} />
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
