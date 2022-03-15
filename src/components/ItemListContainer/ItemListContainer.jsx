
import ItemList from "components/ItemList/ItemList";
import React from "react";

const ItemListContainer = (props) => {
  let item = [
    {
      id: "1",
      title: "Gibson Slash Les Paul Standard",
      description:
        "Mahogany body with AAA flamed maple top, 50s vintage mahogany neck with 22-fret rosewood fingerboard, ABR-1 Tune-o-matic bridge vintage keystone tuners, SlashBucker neck and bridge pickups",
      price: "2999",
      pictureUrl:
        "https://media.guitarcenter.com/is/image/MMGS7/L72812000003000-00-720x720.jpg",
    },
    {
      id: "2",
      title: "Gibson Les Paul Studio",
      description:
        "Gloss-finished, weight-relieved mahogany body with maple top 24.75 -scale mahogany neck with 22-fret rosewood fingerboard dual Gibson humbucking pickups with coil-tap and phase",
      price: "1599",
      pictureUrl:
        "https://media.guitarcenter.com/is/image/MMGS7/L76588000001000-00-720x720.jpg",
    }
  ];

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

  imprimirProductos();
 
  return (
    <>
      {/* <h2>{props.texto}</h2> */}
      <ItemList items={item} />
      
    </>
  );
};

export default ItemListContainer;
