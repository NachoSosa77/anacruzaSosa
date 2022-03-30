import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './context/CartContext'
import Cart from "components/Cart/Cart";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
        <Route path="/cart" element={ <Cart/> }/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
