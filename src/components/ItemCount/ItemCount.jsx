import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const ItemCount = ({
  max = 10,
  accountant,
  setAccountant,
  handleToCart,
  finishBuy,
}) => {
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
                  variant="outline-dark"
                  onClick={handleRestar}
                //disabled={accountant === 0}
                >
                  -
                </Button>
                <span className="spn-account">{accountant}</span>
                <Button
                  variant="outline-dark"
                  onClick={handleSumar}
                //disabled={accountant >= stock}
                >
                  +
                </Button>
     

            {!finishBuy ?
              <Button
                className="btn-idetail"
                variant="outline-dark"
                onClick={handleToCart}
                disabled={accountant === 0}
              >
                Agregar al carrito
              </Button> :

              <Link to="/cart">
                <Button className="btn-idetail" variant="outline-dark">
                  Terminar mi compra
                </Button>
              </Link>
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCount;
