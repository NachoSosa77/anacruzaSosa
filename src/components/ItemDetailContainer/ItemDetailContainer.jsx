import ItemDetail from "components/ItemDetail/ItemDetail";
/* import { pedirDatos } from "components/helpers/pedirDatos"; */
import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "components/Loading/Loading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false)
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true)
    const docRef = doc(db, "items", itemId);
    getDoc(docRef).then((doc) => {
      setItem({ id: doc.id, ...doc.data() });
    })
    .finally(() => {setLoading(false)})
    return ()=>{}
  }, []);

  if(loading){
    return <Loading/>
  }

  return (
    <div className="detail-container">
      <ItemDetail {...item} />
    </div>
  );
};

export default ItemDetailContainer;
