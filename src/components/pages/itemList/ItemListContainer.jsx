import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./ItemList.css";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const validCategories = ["top", "bottom", "full"];
    setError(null);
    let itemsCollection = collection(db, "products");
    let consulta;

    if (categoryName) {
      if (validCategories.includes(categoryName)) {
        consulta = query(
          itemsCollection,
          where("category", "==", categoryName)
        );
      } else {
        setError("La categoria solicitada no es válida");
        setItems([]);
        setLoading(false);
        return;
      }
    } else {
      consulta = itemsCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let productos = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(productos);
      })
      .catch((err) => {
        console.error("Error al obtener productos: ", err);
        setError(
          "Ocurrió un error al cargar los productos. Por favor, intente de nuevo más tarde."
        );
        setItems([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryName]);

  const onAdd = (productToAdd) => (cantidad) => {
    const productCart = { ...productToAdd, quantity: cantidad };
    const result = addToCart(productCart);
    if (result.success) {
      toast.success(result.message, {});
    } else {
      toast.error(result.message, {});
    }
  };
  return (
    <>
      <ItemList
        items={items}
        categoryName={categoryName}
        error={error}
        loading={loading}
        onAdd={onAdd}
        getQuantityById={getQuantityById}
      />
    </>
  );
};

export default ItemListContainer;
