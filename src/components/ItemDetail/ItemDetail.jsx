import React, { useContext } from "react";
import { useState } from "react";
import { Card, Container} from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "components/ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, pictureUrl, title, description, price, stock }) => {
  const [accountant, setAccountant] = useState(1);
  const { addItem, isInCart } = useContext(CartContext);
  const [finishBuy, setFinishBuy] = useState(false);

  const handleToCart = () => {
    if (!isInCart(id)) {
      const itemCart = {
        id,
        price,
        accountant,
        title,
      };
      addItem(itemCart);
    }
    setFinishBuy(true);
  };

  return (
    <Container className="card-detail">
      <Card style={{ width: "18rem" }}>
        <Card.Header>{title}</Card.Header>
        <Card.Img variant="top" src={pictureUrl} />

        <Card.Body >
          <Card.Text>{description}</Card.Text>
          <ItemCount
            finishBuy={finishBuy}
            max={stock}
            accountant={accountant}
            setAccountant={setAccountant}
            handleToCart={handleToCart}
          />
        </Card.Body>

        <Card.Footer className="text-muted">U$D {price}</Card.Footer>
      </Card>
    </Container>
  );
};

export default ItemDetail;
