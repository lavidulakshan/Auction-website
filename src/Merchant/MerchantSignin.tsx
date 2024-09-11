import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MerchantSignin.css';

const MerchantSignin: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Example validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    // Reset error and submit the form
    setError(null);
    console.log('Form Data Submitted:', formData);
    // Add your submit logic here (e.g., API call)
  };

  return (
    <Container fluid="md" className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={4}>
          <div className="text-center mb-4">
            <h2>Merchant Sign In</h2>
            <p>Access your merchant dashboard with your email and password.</p>
          </div>

          {error && <Alert variant="danger" className="mb-4">{error}</Alert>}

          <Form onSubmit={handleSubmit} className="signin-form">
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-4">
              Sign In
            </Button>
          </Form>

          <div className="text-center mt-3">
            <p>Don't have an account? <a href="/merchantregistration">Register here</a></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MerchantSignin;
