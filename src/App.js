import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
