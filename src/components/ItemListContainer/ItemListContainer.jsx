import ItemList from "components/ItemList/ItemList";
//import { pedirDatos } from "../helpers/pedirDatos";
import "./itemListContainer.css";
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  /* const { categoryId } = useParams(); */

  useEffect(() => {
    const getData = async () => {
      const query = collection(db, "items");
      const response = await getDocs(query);
        const dataItems = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProductos(dataItems);
    };
    getData();
  }, []);
  return (
    <div className="list-container">
      {/* <h2>{props.texto}</h2> */}
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
