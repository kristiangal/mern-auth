import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div>
      <Container className="py-5">
        <Card bg="dark" text="light">
          <div className="card-body text-center">
            <h1>Hey there! This is the MERN Auth application!</h1>
            <h4 className="mt-3 mb-3">Be ready for som authentification</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              iusto ipsa magni, recusandae esse autem?
            </p>
          </div>
          <div className="card-footer text-center pb-3">
            <LinkContainer to="/login">
              <Button className="me-3">Sign in</Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="secondary">Sign up</Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
