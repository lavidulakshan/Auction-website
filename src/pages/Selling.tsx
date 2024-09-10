import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Selling.css'; // Import custom CSS file for additional styling

const Selling: React.FC = () => {
    const [formData, setFormData] = useState({
        itemName: '',
        itemDescription: '',
        startingBid: '',
        auctionDate: '',
        category: '',
    });

    const categories = ['Tea', 'Gems', 'Others'];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            auctionDate: e.target.value,
        });
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            category: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data Submitted:', formData);
    };

    return (
        <Container fluid="md" className="my-5">
            <Row>
                {/* Form Section */}
                <Col md={4} className="position-relative">
                    <div className="form-container shadow-lg p-4 rounded">
                        <h2 className="text-center mb-4">Sell Your Item</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formItemName">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the name of the item"
                                    name="itemName"
                                    value={formData.itemName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formItemDescription">
                                <Form.Label>Item Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter a description of the item"
                                    name="itemDescription"
                                    value={formData.itemDescription}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formStartingBid">
                                <Form.Label>Starting Bid</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter the starting bid amount"
                                    name="startingBid"
                                    value={formData.startingBid}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formAuctionDate">
                                <Form.Label>Auction Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="auctionDate"
                                    value={formData.auctionDate}
                                    onChange={handleDateChange} // Handle date change
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleCategoryChange} // Handle category change
                                    required
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 mt-4">
                                List Item
                            </Button>
                        </Form>
                    </div>
                </Col>

                {/* Information Section */}
                <Col md={8}>
                    <Card className="shadow-lg p-4 rounded">
                        <Card.Body>
                            <h2 className="text-center mb-4">Why Sell with Us?</h2>
                            <p>
                                Selling your item through our auction platform offers numerous benefits:
                            </p>
                            <ul>
                                <li><strong>Wide Reach:</strong> Access to a large audience of potential buyers.</li>
                                <li><strong>Competitive Bidding:</strong> Increase the final sale price through competitive bidding.</li>
                                <li><strong>Secure Transactions:</strong> Safe and secure transactions handled by our platform.</li>
                                <li><strong>Expert Support:</strong> Assistance from our team to ensure a smooth selling experience.</li>
                            </ul>
                            <p>
                                Ready to list your item? Fill out the form on the left to get started. If you have any questions, feel free to
                                <a href="/contact"> contact us</a>.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Selling;
