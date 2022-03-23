import ItemList from "components/ItemList/ItemList";
import { pedirDatos } from "../helpers/pedirDatos";
import "./itemListContainer.css";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (!categoryId) {
          setProductos(res);
        } else {
          setProductos(res.filter((prod) => prod.categoria === categoryId));
        }
      })
      .catch((err) => console.error(err));
  }, [categoryId]);

  return (
    <div className="list-container">
      {/* <h2>{props.texto}</h2> */}
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
