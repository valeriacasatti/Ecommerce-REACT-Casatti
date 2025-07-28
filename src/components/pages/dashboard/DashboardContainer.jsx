import {
  setDoc,
  doc,
  collection,
  query,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../productsMock";
import Swal from "sweetalert2";
import Dashboard from "./Dashboard";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DashboardContainer = () => {
  const navigate = useNavigate();

  const [fillingDashboard, setFillingDashboard] = useState(false);
  const [emptyingDashboard, setEmptyingDashboard] = useState(false);

  // fill dashboard
  const fillDashboard = async () => {
    setFillingDashboard(true);
    try {
      for (const product of products) {
        const docRef = doc(db, "products", product.id);
        await setDoc(docRef, product);
      }
      Swal.fire({
        backdrop: `rgba(0,0,0,0.8)`,
        background: "#121212",
        color: "#f5f5f5",
        title: "dashboard filled successfully!",
        showDenyButton: true,
        confirmButtonText: "go to catalog",
        denyButtonText: "ok",
        confirmButtonColor: "#00c42e",
        denyButtonColor: "#e91e63",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/catalog");
        }
      });
    } catch (error) {
      console.error("error filling dashboard: " + error);
      toast.error("error filling dashboard");
    } finally {
      setFillingDashboard(false);
    }
  };

  // empty dashboard
  const emptyDashboard = async () => {
    const result = await Swal.fire({
      backdrop: `rgba(0,0,0,0.8)`,
      background: "#121212",
      color: "#f5f5f5",
      title:
        "you're going to empty your entire dashboard! this action is irreversible",
      showDenyButton: true,
      confirmButtonText: "yes, delete dashboard",
      denyButtonText: `please no`,
      confirmButtonColor: "#00c42e",
      denyButtonColor: "#e91e63",
    });
    if (result.isConfirmed) {
      setEmptyingDashboard(true);
      try {
        const collectionRef = collection(db, "products");
        const q = query(collectionRef);
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          Swal.fire({
            backdrop: `rgba(0,0,0,0.8)`,
            background: "#121212",
            color: "#f5f5f5",
            title: "dashboard is already empty!",
            icon: "info",
            iconColor: "#34b7eb",
            confirmButtonColor: "#34b7eb",
          });
          return;
        }

        const deletePromises = [];
        querySnapshot.forEach((documentSnapshot) => {
          const docRef = doc(db, "products", documentSnapshot.id);
          deletePromises.push(deleteDoc(docRef));
        });

        await Promise.all(deletePromises);

        Swal.fire({
          backdrop: `rgba(0,0,0,0.8)`,
          background: "#121212",
          color: "#f5f5f5",
          title: "dashboard emptied successfully!",
          icon: "success",
          iconColor: "#00c42e",
          confirmButtonColor: "#00c42e",
        });
      } catch (error) {
        console.error("error emptying dashboard: " + error);
        toast.error("error emptying dashboard");
      } finally {
        setEmptyingDashboard(false);
      }
    } else {
      Swal.fire({
        backdrop: `rgba(0,0,0,0.8)`,
        background: "#121212",
        color: "#f5f5f5",
        title: "cancelled! your products are safe :)",
        confirmButtonColor: "#e91e63",
      });
    }
  };
  return (
    <Dashboard
      fillDashboard={fillDashboard}
      fillingDashboard={fillingDashboard}
      emptyDashboard={emptyDashboard}
      emptyingDashboard={emptyingDashboard}
    />
  );
};

export default DashboardContainer;
