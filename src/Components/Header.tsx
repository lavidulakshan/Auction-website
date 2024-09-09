import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Import the CSS file for custom styles
import logo from '../images/logo.jpeg'; // Adjust path if necessary
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex align-items-center">
          <Link to="/" className="nav-link">
                Home
              </Link>
            <Nav.Link href="#aboutus" className="nav-link">About Us</Nav.Link>
            <Nav.Link href="#services" className="nav-link">Services</Nav.Link>
            <Nav.Link href="#auction" className="nav-link">Auction</Nav.Link>
            <div className="ml-auto d-flex flex-wrap">
              <Button variant="outline-light" className="mx-2 mb-2" href="#signin">Sign In</Button>
              <Link to="/customerregistration" className="btn btn-light mb-2">
                Register
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
