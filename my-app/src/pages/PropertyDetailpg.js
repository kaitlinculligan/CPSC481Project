import React, { useState } from "react";
import "./PropertyDetailpg.css";
import { Carousel, Container, Navbar, Nav, Card, Modal, Button, Tab, Tabs } from "react-bootstrap";
import NavBar from './NavBar.js';
import backArrow from "./Photos/backArrow.png";
import heartIcon from "./Photos/favourites.png";
import addIcon from "./Photos/addToFav.png";
import logoIcon from "./Photos/logoAndName.png";
import realtorImage from "./Photos/profileLogo.png";
import house1 from "./Photos/house1.png";
import house2 from "./Photos/house2.png";
import house3 from "./Photos/house3.png";
import house4 from "./Photos/house4.png";

function PropertyDetailPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const propertyImages = [house1, house2, house3, house4];
  const propertyDetails = {
    address: "1234 Dream Lane, Imagination City, Fantasy 00000",
    price: "$999,000",
    description: "This dreamy property boasts 4 bedrooms, 3 bathrooms, and a magical garden.",
    realtor: {
      name: "John Realtor",
      phone: "800-555-0199",
      email: "john@dreamhomes.com",
    },
    bedrooms: 4,
    bathrooms: 3,
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? propertyImages.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1));
  };
  const addToFavorites = () => {
    // Placeholder function to mimic adding to favorites
    console.log("Added to favorites!");
  };
  // Function to format bedroom and bathroom counts
  const formatRooms = (bedrooms, bathrooms) => {
    return `${bedrooms} Bedroom${bedrooms > 1 ? "s" : ""}, ${bathrooms} Bathroom${bathrooms > 1 ? "s" : ""}`;
  };

  return (
    <div style={{ height: "700px", background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
      {/* Navigation bar at the top */}
      <NavBar/>

      {/* Main container for carousel and details */}
      <Container fluid className="p-0">
        {/* Carousel for property images */}
        {/* Carousel styling adjusted to match the desired layout */}
        <Carousel className="property-images-carousel mx-auto my-4" style={{ maxWidth: "90%" }}>
          {propertyImages.map((src, index) => (
            <Carousel.Item key={index} onClick={() => openModal(index)}>
              <img className="d-block w-100" src={src} alt={`Slide ${index}`} />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Property details and realtor information with adjusted layout */}
        <div className="property-realtor-wrapper mx-auto" style={{ maxWidth: "90%" }}>
          {/* Listing details taking up the majority of the width */}
          <div className="property-details">
            {/* Listing details with the favorites button at the top right */}
            <div className="listing-header" style={{ flexGrow: 1, marginRight: "15px" }}>
              {/* Add to Favorites Icon Button */}
              <button className="favorite-btn" onClick={addToFavorites} title="Add to favorites">
                <img src={addIcon} alt="Add to Favorites" />
              </button>
              <div>
                <h3>{propertyDetails.address}</h3>
                <h2>{propertyDetails.price}</h2>
                <p>{formatRooms(propertyDetails.bedrooms, propertyDetails.bathrooms)}</p>
              </div>
            </div>
            {/* Tabs for property description and neighborhood information */}
            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
              <Tab eventKey="description" title="Description">
                <p>{propertyDetails.description}</p>
              </Tab>
              <Tab eventKey="neighborhood" title="Neighborhood">
                <p>Neighborhood info...</p>
              </Tab>
            </Tabs>
          </div>

          {/* Realtor info taking up 30% of the width */}
          <div className="realtor-card-wrapper">
            <Card className="realtor-card">
              <Card.Img variant="top" src={realtorImage} alt="Realtor" />
              <Card.Body>
                <Card.Title>{propertyDetails.realtor.name}</Card.Title>
                <Card.Text>{propertyDetails.realtor.phone}</Card.Text>
                <Card.Text>{propertyDetails.realtor.email}</Card.Text>
                <Button variant="primary">Book Showing</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Modal for enlarged image view */}
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
    </div>
  );
}
export default PropertyDetailPage;
