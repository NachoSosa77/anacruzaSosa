import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { CartContext } from "context/CartContext";

const NavBar = () => {
  const carritoContext = useContext(CartContext);
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Link to="/" className="brand-link">
            <h2>
              <b>Anacruza</b>
            </h2>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/productos/guitarras" className="link-to">
                    Guitarras
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/productos/bajos" className="link-to">
                    Bajos
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Gifs Cards!</NavDropdown.Item>
              </NavDropdown>
              {/* <Link href="#action1">Usados</Link>
              <Link href="#action2">Baterias</Link> */}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Buscar</Button>
            </Form>
            {(carritoContext.totalItem())>0 &&
              <div className="Cart-4">
                <Link to="/cart" className="link-to">
                  <CartWidget />
                </Link>
              </div>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
