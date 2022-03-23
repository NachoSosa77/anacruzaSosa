import React from 'react'
import { Card, Button } from "react-bootstrap";
//import ItemCount from "components/ItemCount/ItemCount";

const ItemDetail = ({id, pictureUrl, title, description, price}) => {
 
  return (
    <div><Card className="card-list">
    <Card.Header>{id}</Card.Header>
    <Card.Img variant="top" src={pictureUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">U$D {price}</Card.Footer>
  </Card></div>
  )
}

export default ItemDetail