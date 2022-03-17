import ItemDetail from 'components/ItemDetail/ItemDetail'
import React from 'react'
import {useState, useEffect} from "react"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)

  let item = {
      id: "1",
      title: "Gibson Slash Les Paul Standard",
      description:
        "Mahogany body with AAA flamed maple top, 50s vintage mahogany neck with 22-fret rosewood fingerboard, ABR-1 Tune-o-matic bridge vintage keystone tuners, SlashBucker neck and bridge pickups",
      price: "2999",
      pictureUrl:
        "https://media.guitarcenter.com/is/image/MMGS7/L72812000003000-00-720x720.jpg",
  }

  const imprimirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item.length === 0) {
          reject("sin productos disponibles");
        } else {
          resolve(item);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    imprimirProductos()
      .then((res) => setProducto(res))      
      .catch((err) => console.error(err));
  }, []);

  return (
    <div><ItemDetail producto={producto}/></div>
  )
}

export default ItemDetailContainer