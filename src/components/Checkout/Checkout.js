import React, { useState, useContext } from "react";
import { CartContext } from "context/CartContext";
import { Button, Form, Card } from "react-bootstrap";
import { Navigate } from "react-router-dom"
import "./Checkout.css"
import { generateOrder } from "utils/generateOrder";
import { validate } from "./Validate";
import { ThankYou } from "./Thankyou";



export const Checkout = () => {
  const { cart, getTotalPrice, clear } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  
  const [valuesInput, setValuesInput] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handlerInputChange = (e) => {
    setValuesInput({
      ...valuesInput,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validate(valuesInput) && generateOrder(valuesInput, cart, getTotalPrice, setOrderId, clear)
}

if(orderId){
  return <ThankYou order={orderId}/>
}

if (cart.length === 0) {
  return <Navigate to="/"/>
}

    return (
      <div className="cart-cont">
        <Card className="container my-6" >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={valuesInput.name}
              onChange={handlerInputChange}
              name='name'
            ></Form.Control>
            <Form.Text></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone"
              value={valuesInput.phone}
              onChange={handlerInputChange}
              name='phone'
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={valuesInput.email}
              onChange={handlerInputChange}
              name='email'
            ></Form.Control>
          </Form.Group>
          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        </Form>
        </Card>
      </div>
    )
  };
