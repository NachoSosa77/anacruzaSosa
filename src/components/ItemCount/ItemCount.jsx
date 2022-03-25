import { Button, Card } from "react-bootstrap";
import "./styles.css";

const ItemCount = ({ max = 10, accountant, setAccountant, handleToCart  }) => {
  

  const handleSumar = () => {
    if (accountant < max) {
      setAccountant(accountant + 1);
    }
  };
  const handleRestar = () => {
    if (accountant > 1) {
      setAccountant(accountant - 1);
    }
  };

  return (
    <div className="card-content">
      <Card style={{ width: "auto" }} border="dark" className="text-center">
        <Card.Body>
          <Card.Text>
            <Button
              variant="secondary"
              onClick={handleRestar}
              //disabled={accountant === 0}
            >
              -
            </Button>
            <span className="spn-account">{accountant}</span>
            <Button
              variant="secondary"
              onClick={handleSumar}
              //disabled={accountant >= stock}
            >
              +
            </Button>
          </Card.Text>
          <Button
            variant="secondary"
            onClick={handleToCart}
            //disabled={accountant > stock || accountant === 0}
          >
            Agregar al carrito!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCount;
