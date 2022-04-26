import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";

export const ThankYou = ({ order }) => {
  return (
    <Container className="cart-thank">
      <Card style={{ width: "50rem" }}>
            <Card.Header>Anacrusa</Card.Header>
                    <Card.Body className="text-center">
                        <Card.Title >
                        ¡Muchas gracias por tu compra!
                        </Card.Title>
                            <Card.Text>
                                Tu número de orden es: {order}
                            </Card.Text>
                                <Link to="/">
                                    <Button className="btn-idetail" variant="outline-dark">
                                    Volver
                                    </Button>
                                </Link>
                        </Card.Body>
      </Card>
    </Container>
  );
};
