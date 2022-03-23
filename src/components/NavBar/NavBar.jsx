import React from "react";
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

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
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
                <Link to="/productos/guitarras" className="link-to"><NavDropdown.Item href="#action3">Guitarras</NavDropdown.Item></Link>
                <Link to="/productos/bajos" className="link-to"><NavDropdown.Item href="#action4">Bajos</NavDropdown.Item></Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Gifs Cards!</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Usados</Nav.Link>
              <Nav.Link href="#action2">Baterias</Nav.Link>
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
            <div className="Cart-4">
              <CartWidget />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
