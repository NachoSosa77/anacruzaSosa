import React from "react";
import { CartContext } from "context/CartContext";
import { Cart4 } from "react-bootstrap-icons";
import { useContext } from "react";

const CartWidget = () => {
  const { totalItem } = useContext(CartContext);
  
  return (
    <>
      <div>
        <Cart4 size={30} />
      </div>
      <span>{totalItem()}</span>
    </>
  );
};

export default CartWidget;
