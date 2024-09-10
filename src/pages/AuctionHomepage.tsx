import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tea from '../images/tea.jpeg';
import gem from '../images/gem.jpeg';
import './HomePage.css'; // Import the custom CSS file
import alipay from '../images/alipay.jpeg';
import visa from '../images/visa.jpeg';

const featuredItems = [
  {
    title: 'Vintage Car',
    description: 'A classic 1965 Mustang in excellent condition.',
    imgSrc: gem,
    auctionDate: '2024-10-15',
  },
  {
    title: 'Rare Painting',
    description: 'An original painting by renowned artist John Doe.',
    imgSrc: tea,
    auctionDate: '2024-11-01',
  },
  {
    title: 'Antique Vase',
    description: 'A beautifully crafted vase from the Ming Dynasty.',
    imgSrc: gem,
    auctionDate: '2024-12-05',
  },
  {
    title: 'Gem1',
    description: 'A rare and valuable gem with exceptional clarity.',
    imgSrc: gem,
    auctionDate: '2024-10-25',
  },
  {
    title: 'Tea',
    description: 'A collection of exotic teas from around the world.',
    imgSrc: tea,
    auctionDate: '2024-11-15',
  },
  {
    title: 'Tea',
    description: 'A collection of exotic teas from around the world.',
    imgSrc: tea,
    auctionDate: '2024-11-15',
  },
];

const AuctionHomepage: React.FC = () => {
  const partnersRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (partnersRowRef.current) {
        if (event.key === 'ArrowRight') {
          partnersRowRef.current.scrollBy({
            left: 100, // Adjust scroll amount as needed
            behavior: 'smooth',
          });
        } else if (event.key === 'ArrowLeft') {
          partnersRowRef.current.scrollBy({
            left: -100, // Adjust scroll amount as needed
            behavior: 'smooth',
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      {/* Carousel */}
      <Carousel interval={3000} controls={false} indicators={false}>
        {featuredItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 "
              src={item.imgSrc}
              alt={`Slide ${index + 1}`}
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Button variant="light" href={`/auction/${index}`}>View Auction</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Upcoming Auctions Section */}
      <Container className="my-5 text-center">
        <h1 className="mb-4">Upcoming Auctions</h1>
        <Row>
          {featuredItems.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.imgSrc} className="card-img" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Button variant="primary" href={`/auction/${index}`}>Bid Now</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Auction Date: {item.auctionDate}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* About Section */}
      {/* <Container className="my-5 text-center">
        <h2 className="mb-4">About Us</h2>
        <p>
          Welcome to our auction website, where you can find a variety of unique and valuable items.
          Our platform offers exciting bidding opportunities for collectors and enthusiasts alike.
        </p>
        <Button variant="info" href="/about">Learn More</Button>
      </Container> */}

      {/* About Us, Mission, Why Choose Us */}
      <section className="course">
        <div className="row">
          <div className="course-col">
            <h3>About Us</h3>
            <p>
              Welcome to Gem & Tea Auction, a unique platform that brings together two of nature's finest treasures – exquisite gemstones and the finest teas. Whether you're a gem collector, tea enthusiast, or both, our auction site offers a one-of-a-kind experience to discover rare finds from all over the world.
            </p>
          </div>
          <div className="course-col">
            <h3>Our Mission</h3>
            <p>
              At Gem & Tea Auction, we strive to create a seamless and exciting auction environment where buyers can confidently bid on premium gemstones and authentic teas. We partner with trusted vendors to ensure all products are genuine, sourced ethically, and of the highest quality.
            </p>
          </div>
          <div className="course-col">
            <h3>Why Choose Us?</h3>
            <ul>
              <li><strong>Exclusive Selections:</strong> Our auctions feature rare and valuable gemstones alongside artisanal teas, sourced from renowned regions and suppliers.</li>
              <li><strong>Secure Bidding:</strong> We prioritize your security with safe, transparent bidding processes, allowing you to participate with confidence.</li>
              <li><strong>Community-Driven:</strong> We are passionate about building a community of collectors, connoisseurs, and enthusiasts who share our love for gems and teas.</li>
              <li><strong>Global Reach:</strong> With vendors and bidders from across the globe, our auctions offer a truly international experience.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section py-5 bg-light">
        <div className="container">
        <h3 className="text-center mb-4 text-primary fw-bold border-bottom border-dark pb-2">Our Partners</h3>
          <div className="partners-row d-flex overflow-auto" ref={partnersRowRef}>
            <div className="partner card mx-3">
              <img src={visa} alt="Partner 1" className="card-img-top" />
            </div>
            <div className="partner card mx-3">
              <img src={visa} alt="Partner 2" className="card-img-top" />
            </div>
            <div className="partner card mx-3">
              <img src={alipay} alt="Partner 3" className="card-img-top" />
            </div>
            <div className="partner card mx-3">
              <img src={alipay} alt="Partner 4" className="card-img-top" />
            </div>
            <div className="partner card mx-3">
              <img src={visa} alt="Partner 5" className="card-img-top" />
            </div>
            <div className="partner card mx-3">
              <img src={alipay} alt="Partner 6" className="card-img-top" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuctionHomepage;
