import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormConainer from "../components/FormContainer.jsx";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <FormConainer>
      <Form onSubmit={handleLogin}>
        <h1>Sign in</h1>
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
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Login
        </Button>
        <Row className="pt-3">
          <Col>
            New Customer? <Link to="/register">Register</Link>
          </Col>
        </Row>
      </Form>
    </FormConainer>
  );
};

export default LoginPage;
