import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BiLogIn } from "react-icons/bi";
import { LinkContainer } from "react-router-bootstrap";

const NavComponent = () => {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>MERN Auth</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
              <Nav.Link>
                <BiLogIn /> Sign in
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>
                <BiLogIn /> Sign up
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
