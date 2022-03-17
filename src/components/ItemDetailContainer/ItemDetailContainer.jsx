import ItemDetail from 'components/ItemDetail/ItemDetail'
import { pedirDatos } from 'components/helpers/pedirDatos'
import React from 'react'
import {useState, useEffect} from "react"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)


  useEffect(() => {
    pedirDatos()
      .then((res) => setProducto(res))      
      .catch((err) => console.error(err));
  }, []);

  return (
    <div><ItemDetail producto={producto}/></div>
  )
}

export default ItemDetailContainer