import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'; // Import custom CSS file for additional styling

const Services: React.FC = () => {
  const services = [
    {
      title: 'Live Auction Events',
      description: 'Participate in live auctions from the comfort of your home. Bid on items in real-time and take advantage of the excitement of live bidding.',
      icon: 'fas fa-gavel'
    },
    {
      title: 'Expert Valuation',
      description: 'Get professional valuation for your items from industry experts. Ensure that your items are priced appropriately to attract serious bidders.',
      icon: 'fas fa-calculator'
    },
    {
      title: 'Secure Transactions',
      description: 'Enjoy peace of mind with our secure payment processing and transaction management. Your transactions are protected with the highest security standards.',
      icon: 'fas fa-lock'
    },
    {
      title: '24/7 Support',
      description: 'Our dedicated support team is available around the clock to assist you with any questions or issues you may encounter during the auction process.',
      icon: 'fas fa-headset'
    }
  ];

  return (
    <Container fluid="md" className="my-5">
      <Row className="text-center mb-4">
        <Col md={12}>
          <h1>Our Services</h1>
          <p className="lead">Discover the range of services we offer to enhance your auction experience.</p>
        </Col>
      </Row>
      <Row>
        {services.map((service, index) => (
          <Col md={6} lg={3} className="mb-4" key={index}>
            <Card className="shadow-lg border-0 rounded">
              <Card.Body className="text-center">
                <div className="service-icon mb-3">
                  <i className={service.icon}></i>
                </div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="primary" href="/learn-more">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
