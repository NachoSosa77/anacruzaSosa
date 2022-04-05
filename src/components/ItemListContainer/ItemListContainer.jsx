import ItemList from "components/ItemList/ItemList";
//import { pedirDatos } from "../helpers/pedirDatos";
import "./itemListContainer.css";
import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "items");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;
    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  }, [categoryId]);
  return (
    <div className="list-container">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
