import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
