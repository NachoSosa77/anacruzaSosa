import React from "react";
import {Link} from "react-router-dom"
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "components/ItemCount/ItemCount";

const ItemDetail = ({ id, pictureUrl, title, description, price, stock }) => {
  const [accountant, setAccountant] = useState(1);
  const [itemInCart, setItemInCart] = useState(false);

  const handleToCart = () => {
    const itemToCart = {
      id,
      title,
      price,
      pictureUrl,
      accountant,
    };
    console.log(itemToCart);
    setItemInCart(true);
    };

  return (
    <div className="card-detail">
      <Card style={{ width: "18rem" }}>
        <Card.Header>{id}</Card.Header>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {itemInCart > 0 && (
          <Link to="/cart">
            <Button variant="secondary">Ir al carrito</Button>
          </Link>
          )}
          {!itemInCart && (
          <ItemCount
            max={stock}
            accountant={accountant}
            setAccountant={setAccountant}
            handleToCart={handleToCart}
          />
          )}
        </Card.Body>
        <Card.Footer className="text-muted">U$D {price}</Card.Footer>
      </Card>
    </div>
  );
};

export default ItemDetail;
