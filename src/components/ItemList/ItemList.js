import Item from "components/Item/Item";
import React from "react";
import {CardGroup} from "react-bootstrap";
import Loading from "components/Loading/Loading";

const ItemList = ({ productos, loading }) => {

  if(loading||!productos){
    return <Loading/>;
  }

  return (
    <div>
      <CardGroup>
      {productos.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          pictureUrl={item.pictureUrl}
          price={item.price}
        />
      ))}
      </CardGroup>
    </div>
  );
};

export default ItemList;
