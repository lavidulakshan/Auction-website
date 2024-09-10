import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; // Import custom CSS file

const Dashboard: React.FC = () => {
  return (
    <Container fluid="md" className="my-5">
      <Row className="mb-4">
        <Col md={12} className="text-center">
          <h1>Dashboard</h1>
          <p className="lead">Welcome to your auction dashboard. Manage your auctions and view statistics here.</p>
        </Col>
      </Row>

      <Row>
        {/* Upcoming Auctions */}
        <Col md={4} className="mb-4">
          <Card className="dashboard-card">
            <Card.Header>Upcoming Auctions</Card.Header>
            <Card.Body>
              <h5 className="card-title">Vintage Car Auction</h5>
              <p className="card-text">A classic 1965 Mustang in excellent condition.</p>
              <Button variant="primary" href="/upcoming-auctions">View All Auctions</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Recent Bids */}
        <Col md={4} className="mb-4">
          <Card className="dashboard-card">
            <Card.Header>Recent Bids</Card.Header>
            <Card.Body>
              <h5 className="card-title">Bid on Rare Painting</h5>
              <p className="card-text">Bid placed on an original painting by renowned artist John Doe.</p>
              <Button variant="secondary" href="/recent-bids">View All Bids</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Statistics */}
        <Col md={4} className="mb-4">
          <Card className="dashboard-card">
            <Card.Header>Statistics</Card.Header>
            <Card.Body>
              <h5 className="card-title">Your Statistics</h5>
              <p className="card-text">Total Auctions: 12</p>
              <p className="card-text">Total Bids: 45</p>
              <p className="card-text">Pending Auctions: 3</p>
              <Button variant="success" href="/statistics">View More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Quick Actions */}
        <Col md={4} className="mb-4">
          <Card className="dashboard-card">
            <Card.Header>Quick Actions</Card.Header>
            <Card.Body>
              <Button variant="info" className="w-100 mb-2" href="/create-auction">Create New Auction</Button>
              <Button variant="warning" className="w-100" href="/manage-auctions">Manage Auctions</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Notifications */}
        <Col md={8} className="mb-4">
          <Card className="dashboard-card">
            <Card.Header>Notifications</Card.Header>
            <Card.Body>
              <h5 className="card-title">Latest Updates</h5>
              <ul>
                <li>New bid placed on your item.</li>
                <li>Your auction has been scheduled for next week.</li>
                <li>Reminder: Auction ends in 2 days.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
