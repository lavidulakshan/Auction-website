import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import teamPhoto from '../images/team.jpg'; // Add a relevant team image

const AboutUs: React.FC = () => {
  return (
    <Container fluid="md" className="my-5">
      {/* Header Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4">About Us</h1>
          <p className="lead">Discover the story behind our auction platform and meet the team dedicated to bringing you exceptional bidding experiences.</p>
        </Col>
      </Row>

      {/* Mission Statement */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">Our Mission</Card.Title>
              <Card.Text>
                At [Your Auction Company], our mission is to provide a seamless and engaging auction experience for buyers and sellers alike. We are committed to transparency, reliability, and creating a platform where unique and valuable items find their new homes.
              </Card.Text>
              <Button variant="info" href="/mission">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Team Section */}
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">Meet the Team</Card.Title>
              <Image rounded fluid className="mb-3" />
              <Card.Text>
                Our team is passionate about auctions and dedicated to providing top-notch service. With diverse backgrounds and expertise, we work together to ensure every auction runs smoothly and every customer is satisfied.
              </Card.Text>
              <Button variant="info" href="/team">Meet the Team</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Information */}
      <Row className="mb-5">
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">Get in Touch</Card.Title>
              <Card.Text>
                Have questions or need assistance? Reach out to us through the following contact methods:
              </Card.Text>
              <ul>
                <li>Email: <a href="mailto:support@auctioncompany.com">support@auctioncompany.com</a></li>
                <li>Phone: <a href="tel:+1234567890">+123-456-7890</a></li>
                <li>Address: 123 Auction St, Bid City, BC 45678</li>
              </ul>
              <Button variant="info" href="/contact">Contact Us</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
