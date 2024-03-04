import React from 'react';
import './PropertyDetailpg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import backArrow from "./Photos/backArrow.png";
import heartIcon from "./Photos/favourites.png";
import homeIcon from "./Photos/homePage.png";
import realtorImage from "./Photos/shrek_realtor.png";
import house1 from "./Photos/house1.png";
import house2 from "./Photos/house2.png";
import house3 from "./Photos/house3.png";
import house4 from "./Photos/house4.png";

function PropertyDetailPage() {
  // Dummy data for images and details
  const propertyImages = [house1, house2, house3, house4];
  const propertyDetails = {
    address: '1234 Dream Lane, Imagination City, Fantasy 00000',
    price: '$999,000',
    description: 'This dreamy property boasts 4 bedrooms, 3 bathrooms, and a magical garden.',
    realtor: {
      name: 'John Realtor',
      phone: '800-555-0199',
      email: 'john@dreamhomes.com'
    }
  };

  return (
    <Container>
      {/* Navigation and Favorites */}
      <Row className="my-4">
        <Col xs={4} className="text-start">
          <img src={backArrow} alt="Back" className="icon" /> Back to Search
        </Col>
        <Col xs={4} className="text-center">
          <img src={homeIcon} alt="Home" className="icon" /> Homepage
        </Col>
        <Col xs={4} className="text-end">
          <img src={heartIcon} alt="Add to Favorites" className="icon" /> Add to Favorites
        </Col>
      </Row>

      {/* Property Images Carousel */}
      <Carousel className="property-images-carousel">
        {propertyImages.map((src, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={src} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Property Description and Realtor Info */}
      <Row className="my-4">
        <Col md={8} className="property-description">
          <h3>{propertyDetails.address}</h3>
          <h4>{propertyDetails.price}</h4>
          <p>{propertyDetails.description}</p>
        </Col>
        <Col md={4} className="realtor-info">
          <Card>
            <Card.Img variant="top" src={realtorImage} alt="Realtor" />
            <Card.Body>
              <Card.Title>Realtor Information</Card.Title>
              <Card.Text>{propertyDetails.realtor.name}</Card.Text>
              <Card.Text>{propertyDetails.realtor.phone}</Card.Text>
              <Card.Text>{propertyDetails.realtor.email}</Card.Text>
              <Button variant="primary">Book Showing</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PropertyDetailPage;
