import {ItemDetail} from "components/ItemDetail/ItemDetail";
import { pedirDatos } from "components/helpers/pedirDatos";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    pedirDatos().then((res) => {
      setItem(res.find((prod) => prod.id === itemId));
    });
  }, []);
  return (
    <div className="detail-container">
      <ItemDetail {...item}/>
    </div>
  );
};

export default ItemDetailContainer;
