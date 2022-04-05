import { CartContext } from "context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import "./Cart.css";
import {Timestamp, collection, addDoc} from "firebase/firestore";
import { db } from "utils/firebase";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const setCart = cartContext.cart;
  console.log("setCart", setCart);

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
  const sendOrder = async (e) => {
    e.preventDefault();
    console.log("evento", e);
    const nombre = e.target[0].value;
    const phone = e.target[1].value;
    const email = e.target[2].value;

    const newOrder = {
      buyer: {
        name: nombre,
        phone,
        email,
      },
      items: setCart,
      total: cartContext.getTotalPrice(),
      date:Timestamp.fromDate(new Date())
    };
    console.log(newOrder);

    const ordersCollections = collection(db, 'orders');
    const docReference = await addDoc(ordersCollections, newOrder );
    console.log("order",docReference)
  };
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
                  {/* <Link to="/checkout" className="btn btn-success mx-2">Terminar mi compra</Link> */}
                </div>
                <div>
                  <Form onSubmit={sendOrder}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nombre"
                      ></Form.Control>
                      <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                      ></Form.Control>
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">
                      Submit
                    </Button>
                  </Form>
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
