import React, { useContext } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "context/CartContext";
const Cart = () => {
  const cartContext = useContext(CartContext);
  const setCart = cartContext.cart;

  if (setCart.length === 0) { 
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

        {setCart.map((item) => (
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
                  onClick={() => cartContext.deleteItem(item.id)}
                >
                  Borrar
                </Button>

                <div className="my-2">
                  <Button variant="outline-danger" onClick={cartContext.clear}>
                    Vaciar carrito
                  </Button>
                </div>
                
              </Card.Body>
            </Card>
          </div>
        ))}
        <hr />
        <h2>Total: ${cartContext.getTotalPrice()}</h2>

        <div className="my-2">
          <Link to="/checkout">
            <Button variant="outline-dark">Confirma tu orden de pedido</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
