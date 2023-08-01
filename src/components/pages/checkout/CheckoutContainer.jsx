import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");
  console.log(orderId);
  const { clearCart, cart, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      card: "",
      expiration: "",
      securityCode: "",
      address: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().required().email(),
      card: Yup.number().required(),
      expiration: Yup.string().required(),
      securityCode: Yup.number().required(),
      address: Yup.string().required(),
    }),
    validateOnChange: false,
  });

  const pay = () => {
    {
      setTimeout(() => {
        Swal.fire({
          backdrop: `rgba(0,0,0,0.8)`,
          background: "#121212",
          color: "#f5f5f5",
          title: "successful payment!",
          footer: "we'll send the receipt to your email",
          icon: "success",
          iconColor: "#00c42e",
          confirmButtonColor: "#00c42e",
        }).then((result) => {
          if (result.isConfirmed) {
            clearCart();
          }
        });
      }, 1000);
    }
  };

  return (
    <>
      <Checkout
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
        pay={pay}
        orderId={orderId}
      />
    </>
  );
};

export default CheckoutContainer;
