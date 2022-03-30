import { CartContext } from "context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, deletItem, clear } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container my-4">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="container my-4">
        <h2>Tu compra</h2>
        <hr />

        {cart.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>Cantidad: {item.accountant}</p>
            <p>Precio: ${item.accountant * item.price}</p>
            <button
              className="btn btn-danger"
              onClick={()=>deletItem(item.id)}
            >
              Borrar
            </button>
          </div>
        ))}

        <div className="my-2">
          <button className="btn btn-danger" onClick={clear}>
            Vaciar carrito
          </button>
          {/* <Link to="/checkout" className="btn btn-success mx-2">Terminar mi compra</Link> */}
        </div>
      </div>
    </>
  );
};

export default Cart;
