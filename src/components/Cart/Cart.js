import { CartContext } from "context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./Cart.css"


const Cart = () => {
  const { cart, deleteItem, clear } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-cont">
        <Card className="container my-6">
          <Card.Body>
            <Card.Title>Tu carrito está vacío</Card.Title>
            <Link to="/" className="btn btn-outline-dark">
              Volver
            </Link>
          </Card.Body>
        </Card>
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
            <Card>
              <Card.Body>
                <Card.Title>
                  <h4>{item.title}</h4>
                </Card.Title>

                <Card.Text>Cantidad: {item.accountant}</Card.Text>
                <Card.Text>Precio: ${item.accountant * item.price}</Card.Text>

                <Button
                  variant="outline-danger"
                  onClick={() => deleteItem(item.id)}
                >
                  Borrar
                </Button>

                <div className="my-2">
                  <Button variant="outline-danger" onClick={clear}>
                    Vaciar carrito
                  </Button>
                  {/* <Link to="/checkout" className="btn btn-success mx-2">Terminar mi compra</Link> */}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
