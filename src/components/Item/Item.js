import React from "react";
import "./style.css";
//import ItemCount from "components/ItemCount/ItemCount";
import { Card, Button } from "react-bootstrap";

function Item({id, pictureUrl, title, description, price}){


  return (
    <div>
      <Card className="card-list">
        <Card.Header>{id}</Card.Header>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-grid gap-2">
          <Button variant="outline-dark" disabled>Ver Más</Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">U$D {price}</Card.Footer>
      </Card>
      {/*<ItemCount stock={5} initial={1} />*/}
    </div>
  );
};

export default Item;
