import React from "react";
import { Card} from "react-bootstrap";
import "./ItemDetail.css";
//import ItemCount from "components/ItemCount/ItemCount";

const ItemDetail = ({ id, pictureUrl, title, description, price }) => {
  return (
    <div className="card-detail">
      <Card style={{ width: '18rem' }}>
        <Card.Header>{id}</Card.Header>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">U$D {price}</Card.Footer>
      </Card>
    </div>
  );
};

export default ItemDetail;
