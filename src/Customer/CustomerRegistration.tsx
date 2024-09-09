import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'India',
  'China',
  'Japan',
  'Brazil',
];

const CustomerRegistration: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   mobile: '',
  //   country: '',
  // });

  // const [firstName , setFirstName] = useState<string>("");
  // const [lastName , setLastName] = useState<string>("");
  // const [email , setEmail] = useState<string>("");
  // const [mobile , setMobile] = useState<string>("");
  // const [country , setCountry] = useState<string>("");

  //   const handleFirstName = (event: any) => {
  //     setFirstName(event.target.value);

  // }

  // const handleLastName = (event: any) => {
  //   setLastName(event.target.value);

  // }

  // const handleEmail = (event: any) => {
  //   setEmail(event.target.value);

  // }

  // const handleMobile = (event: any) => {
  //   setMobile(event.target.value);

  // }

  // const handleCountry = (event: any) => {
  //   setCountry(event.target.value);

  // }
  // Handle change function to update form data
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log('Form Data Submitted:', formData);
  };

  const [selectedCountry, setSelectedCountry] = useState("Sri Lanka");
  const handleChange = (event: any) => {
    setSelectedCountry(event.target.value);
  }

  return (
    <Container fluid="md" className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={4}>
          <h2 className="text-center mb-4">Customer Registration</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                // value={formData.firstName}
                // onChange={handleFirstName} // Enable handleChange
                required
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                // value={formData.lastName}
                // onChange={handleLastName} // Enable handleChange
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                // value={formData.email}
                // onChange={handleEmail} // Enable handleChange
                required
              />
            </Form.Group>
            <Form.Group controlId="formMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your mobile number"
                name="mobile"
                // value={formData.mobile}
                // onChange={handleMobile} // Enable handleChange
                required
              />
            </Form.Group>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                name="country"
                // value={formData.country}
                // onChange={handleCountry} // Enable handleChange
                required
              >
                <option onChange={handleChange} value="">{selectedCountry}</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-4">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerRegistration;
