import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Ensure this file is created for custom styles

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-light">Home</Nav.Link>
              <Nav.Link href="#aboutus" className="text-light">About Us</Nav.Link>
              <Nav.Link href="#services" className="text-light">Services</Nav.Link>
              <Nav.Link href="#auction" className="text-light">Auction</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Sri Pay. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
