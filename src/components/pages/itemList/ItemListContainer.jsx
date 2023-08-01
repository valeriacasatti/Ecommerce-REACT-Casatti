import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./ItemList.css";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");

    let consulta;

    if (categoryName) {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    } else {
      consulta = itemsCollection;
    }

    getDocs(consulta).then((res) => {
      let productos = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setItems(productos);
    });
  }, [categoryName]);

  return (
    <>
      <ItemList items={items} categoryName={categoryName} />
    </>
  );
};

export default ItemListContainer;
