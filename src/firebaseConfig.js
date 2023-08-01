import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8OQWkfq7H4mVMEG5CbaHpdPYUKislH-I",
  authDomain: "proyectofinal-casatti.firebaseapp.com",
  projectId: "proyectofinal-casatti",
  storageBucket: "proyectofinal-casatti.appspot.com",
  messagingSenderId: "249423929917",
  appId: "1:249423929917:web:cb9b243f29d9faf6a9c054",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
