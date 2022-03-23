import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ id, pictureUrl, title, description, price }) {
  return (
    <div>
      <Link to={`/detail/${id}`} className="link-to">
        <Card className="card-list">
          <Card.Header>{id}</Card.Header>
          <Card.Img variant="top" src={pictureUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={`/detail/${id}`} className="link-to">
            <div className="d-grid gap-2">
              <Button variant="outline-dark">Ver Más</Button>
            </div>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">U$D {price}</Card.Footer>
        </Card>
      </Link>
    </div>
  );
}

export default Item;
