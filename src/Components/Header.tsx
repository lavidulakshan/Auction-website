import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Import the CSS file for custom styles
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <p className='sriPay'> Sri pay</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-items d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/aboutus" className="nav-link">AboutUS</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/merchantregistration" className="nav-link">Selling</Link>
            <div className="d-flex flex-wrap justify-content-center">
              <Link to="/sigin" className="btn btn mb-2 mx-2">
                SignIn
              </Link>
              <Link to="/CustomerRegistration" className="btn btn-light mb-2">
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
