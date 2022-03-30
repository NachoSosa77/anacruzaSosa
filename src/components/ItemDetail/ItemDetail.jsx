import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "components/ItemCount/ItemCount";
import {CartContext} from "../../context/CartContext"

export const ItemDetail = ({
  id,
  pictureUrl,
  title,
  description,
  price,
  stock,
}) => {
  const [accountant, setAccountant] = useState(1);
  const { addItem, isInCart } = useContext(CartContext);

  const handleToCart = () => {
    if (accountant === 0) return;
    if (!isInCart(id)) {
      const itemToCart = {
        id,
        title,
        price,
        pictureUrl,
        accountant,
      };

      addItem(itemToCart);
    }
  }

    return (
      <div className="card-detail">
        <Card style={{ width: "18rem" }}>
          <Card.Header>{id}</Card.Header>
          <Card.Img variant="top" src={pictureUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>

            {isInCart(id) ? (
              <Link to="/cart">
                <Button variant="secondary">Ir al carrito</Button>
              </Link>
            ) : (
              <>
                <ItemCount
                  max={stock}
                  accountant={accountant}
                  setAccountant={setAccountant}
                />
                <Button
                  className="btn btn-success my-2"
                  onClick={handleToCart}
                  disabled={accountant === 0}
                >
                  Agregar al carrito
                </Button>
              </>
            )}
          </Card.Body>
          <Card.Footer className="text-muted">U$D {price}</Card.Footer>
        </Card>
      </div>
    );
  };

