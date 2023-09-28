import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormConainer from "../components/FormContainer.jsx";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(email, password, name, confirmPassword);
  };

  return (
    <FormConainer>
      <Form onSubmit={handleRegister}>
        <h1>Sign in</h1>
        <Form.Group controlId="name" className="py-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name..."
            autoComplete="username"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email" className="py-2">
          <Form.Label>E-mail Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your e-mail..."
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="py-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password..."
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirm-password" className="py-2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password..."
            autoComplete="new-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Register
        </Button>
        <Row className="pt-3">
          <Col>
            Already have an account? <Link to="/login">Sign in</Link>
          </Col>
        </Row>
      </Form>
    </FormConainer>
  );
};

export default RegisterPage;
