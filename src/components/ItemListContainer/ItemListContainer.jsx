import ItemList from "components/ItemList/ItemList";
import { pedirDatos } from "../helpers/pedirDatos";
import "./itemListContainer.css";
import React from "react";
import { useState, useEffect } from "react";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirDatos()
      .then((res) => setProductos(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="list-container">
      {/* <h2>{props.texto}</h2> */}
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
