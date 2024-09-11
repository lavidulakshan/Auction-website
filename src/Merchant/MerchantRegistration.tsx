import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MerchantRegistration.css'; // Import custom CSS file for additional styling

interface Country {
  name: {
    common: string;
  };
}

const MerchantRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    merchantName: '',
    businessEmail: '',
    contactNumber: '',
    businessAddress: '',
    country: 'Sri Lanka',
  });

  const [countries, setCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch countries data from API
  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Failed to fetch countries');
      }
      const data: Country[] = await response.json();
      const countryList = data.map((country) => country.name.common);
      setCountries(countryList);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  // Handle form change for input elements
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form change for select elements
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <Container fluid="md" className="my-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8} xl={6}>
          <div className="registration-card shadow-lg p-4 rounded">
            <h2 className="text-center mb-4">Merchant Registration</h2>

            <Alert variant="info" className="mb-4">
              <h5>Important Notice for Merchants</h5>
              <p>
                Please ensure that all the information provided is accurate and up-to-date.
                After registration, you will receive a confirmation email to verify your account.
                If you have any questions, feel free to contact our support team.
              </p>
            </Alert>

            {loading && <p>Loading countries...</p>}
            {error && <Alert variant="danger">{error}</Alert>}

            {!loading && !error && (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formMerchantName">
                  <Form.Label className='form-label'>Merchant Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your merchant name"
                    name="merchantName"
                    value={formData.merchantName}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBusinessEmail">
                  <Form.Label className='form-label'>Business Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your business email"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formContactNumber">
                  <Form.Label className='form-label'>Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your contact number"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBusinessAddress">
                  <Form.Label className='form-label'>Business Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your business address"
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formCountry">
                  <Form.Label className='form-label'>Country</Form.Label>
                  <Form.Control
                    as="select"
                    name="country"
                    value={formData.country}
                    // onChange={handleSelectChange}
                    required
                  >
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-4">
                  Register as Merchant
                </Button>
              </Form>
            )}

            <div className="text-center mt-3">
              <p>Already have an account? <Link to="/merchansignin">Sign in</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MerchantRegistration;
