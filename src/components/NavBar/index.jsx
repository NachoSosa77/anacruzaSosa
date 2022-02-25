import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><h2><b>Anacruza</b></h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    Guitarras
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Bajos
                  </NavDropdown.Item>
                    <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Gifs Cards!
                      </NavDropdown.Item>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
