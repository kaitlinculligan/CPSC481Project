import React, { useState } from 'react';
import './PropertyDetailpg.css';
import { Carousel, Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import backArrow from "./Photos/backArrow.png";
import heartIcon from "./Photos/favourites.png";
import homeIcon from "./Photos/homePage.png";
import logoIcon from "./Photos/hype.png"; // Make sure to have your logo image in the Photos directory
import realtorImage from "./Photos/shrek_realtor.png";
import house1 from "./Photos/house1.png";
import house2 from "./Photos/house2.png";
import house3 from "./Photos/house3.png";
import house4 from "./Photos/house4.png";

function PropertyDetailPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? propertyImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container fluid className="p-0">
      {/* Navigation and Favorites */}
      <Row className="my-4 navigation-icons">
        <Col xs={4} className="text-start">
          <img src={logoIcon} alt="Logo" className="icon logo-icon" />
          <img src={backArrow} alt="Back" className="icon back-icon" />
          <span className="align-middle">Back to Search</span>
        </Col>
        <Col xs={4} className="text-center">
          <img src={homeIcon} alt="Home" className="icon home-icon" />
        </Col>
        <Col xs={4} className="text-end">
          <img src={heartIcon} alt="Add to Favorites" className="icon favorites-icon" />
        </Col>
      </Row>

      {/* Property Images Carousel */}
      <Carousel className="property-images-carousel">
        {propertyImages.map((src, index) => (
          <Carousel.Item key={index} onClick={() => openModal(index)}>
            <img className="d-block w-100" src={src} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Property Description and Realtor Info */}
      <Row className="my-4 property-details-row">
        <Col lg={8} className="property-description">
          <h3>{propertyDetails.address}</h3>
          <h4>{propertyDetails.price}</h4>
          <p>{propertyDetails.description}</p>
        </Col>
        <Col lg={4} className="realtor-info">
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

      {/* Modal for the enlarged image view */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Property Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={propertyImages[currentIndex]} alt="Property" className="w-100" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={goToPrevious}>
            Previous
          </Button>
          <Button variant="secondary" onClick={goToNext}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
   );
}

export default PropertyDetailPage;
