import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./styles.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [accountant, setAccountant] = useState(initial);

  const sumar = () => {
    if (accountant < stock) {
      setAccountant(accountant + 1);
    }
  };
  const restar = () => {
    if (accountant > 0) {
      setAccountant(accountant - 1);
    }
  };
  
 

  return (
    <div className="card-content">
      <Card style={{ width: "10rem" }} border="dark" className="text-center">
        <Card.Header>
          <Card.Title>Gibson Les Paul</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Button
              variant="secondary"
              onClick={restar}
              disabled={accountant === 0}
            >
              -
            </Button>
            <span className="spn-account">{accountant}</span>
            <Button
              variant="secondary"
              onClick={sumar}
              disabled={accountant >= stock}
            >
              +
            </Button>
          </Card.Text>
          <Button
            variant="secondary"
            onClick={onAdd}
            disabled={accountant > stock || accountant === 0}
          >
            Agregar al carrito!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCount;
