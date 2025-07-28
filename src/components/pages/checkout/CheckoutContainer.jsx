import Checkout from "./Checkout";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
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
  const { clearCart, cart, getTotalPrice } = useContext(CartContext);

  const navigate = useNavigate();
  let total = getTotalPrice();

  const [processingPayment, setProcessingPayment] = useState(false);

  const handlePaymentSuccess = (id) => {
    setTimeout(() => {
      setProcessingPayment(false);
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
          localStorage.setItem("orderId", id);
          navigate("/");
        }
      });
    }, 1000);
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      deliveryMethod: "",
      country: "",
      city: "",
      address: "",
      postalCode: "",
      card: "",
      expMonth: "",
      expYear: "",
      securityCode: "",
      cardHolder: "",
    },
    onSubmit: async (data) => {
      setProcessingPayment(true);

      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };

      const ordersCollection = collection(db, "orders");

      try {
        const docRef = await addDoc(ordersCollection, order);

        // update stock
        cart.forEach((product) => {
          updateDoc(doc(db, "products", product.id), {
            stock: product.stock - product.quantity,
          });
        });

        handlePaymentSuccess(docRef.id);
      } catch (error) {
        setProcessingPayment(false);

        console.error("Error processing order or updating stock: " + error);
        Swal.fire({
          backdrop: `rgba(0,0,0,0.8)`,
          background: "#121212",
          color: "#f5f5f5",
          title: "oops...",
          footer: "there was an error processing your order, please try again.",
          icon: "error",
          iconColor: "#e91e63",
          confirmButtonColor: "#e91e63",
        });
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("your name is required"),
      lastname: Yup.string().required("your last name is required"),
      email: Yup.string().required("your email is required").email(),
      phone: Yup.number().required("your phone number is required"),
      country: Yup.string().required("your country is required"),
      city: Yup.string().required("your city is required"),
      address: Yup.string().required("your address is required"),
      postalCode: Yup.string().required("your postal code is required"),
      card: Yup.number().required("your card number is required"),
      expMonth: Yup.number().required("the expiration month is required"),
      expYear: Yup.number().required("the expiration year is required"),
      securityCode: Yup.number().required("the security code is required"),
      cardHolder: Yup.string().required("the name on the card is required"),
    }),
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <>
      <Checkout
        cart={cart}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
        errors={errors}
        total={total}
        processingPayment={processingPayment}
      />
    </>
  );
};

export default CheckoutContainer;
