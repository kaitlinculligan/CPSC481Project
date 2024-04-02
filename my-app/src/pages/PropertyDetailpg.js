import React, { useState } from "react";
import "./PropertyDetailpg.css";
import { Carousel, Container, Navbar, Nav, Card, Modal, Button, Tab, Tabs } from "react-bootstrap";
import NavBar from "./NavBar.js";
import backArrow from "./Photos/backArrow.png";
import heartIcon from "./Photos/favourites.png";
import addIcon from "./Photos/addToFav.png";
import logoIcon from "./Photos/logoAndName.png";
import realtorImage from "./Photos/profileLogo.png";
import house1 from "./Photos/house1.png";
import house2 from "./Photos/house2.png";
import house3 from "./Photos/house3.png";
import house4 from "./Photos/house4.png";
import bed from "./Photos/Bed.png";
import bath from "./Photos/Bath.png";
import { useLocation } from "react-router-dom";
import houseInfo from "./houseInfo.js";
import { useEffect } from "react";

function PropertyDetailPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const location = useLocation();
  const { user, id} = location.state || {};
  let houseId = String(id);
  console.log("id:", id);
  const [propertyImages, setPropertyImages] = useState([]);

  useEffect(() => {
    // Function to find the property by ID and set images
    const getPropertyImages = (houseId) => {
      const property = houseInfo.find(property => property.id === houseId);
      console.log("Property:", property);
      if (property && property.photos) {
        setPropertyImages(property.photos);
      }
      console.log("Property Images:", propertyImages);
    };

    

    getPropertyImages(houseId);
  }, [houseId]);

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
      <NavBar />

      {/* Main container for carousel and details */}
      <div className="h-50 w-100 d-flex flex-row bg-info ">
        <div className="h-100 w-50 d-flex flex-column align-items-center">
          <div className="w-100 h-50 d-flex flex-row justify-content-center bg-body-secondary" style={{ fontSize: "45px", fontWeight: "bold" }}>
            {propertyDetails.address}
          </div>
          <div className="w-100 h-25 d-flex flex-row justify-content-center bg-body-tertiary text-uppercase" style={{ fontSize: "45px" }}>
            {propertyDetails.price}
          </div>
          <div className="w-100 h-25 d-flex flex-row justify-content-center bg-body ">
            <div className="h-100 w-50 d-flex flex-row justify-content-evenly">
              <div className="w-50 h-100">
                <img
                  src={bed}
                  alt="Bed"
                  style={{
                    width: "100%", // Use 100% of the container's width
                    height: "100%", // Use 100% of the container's height
                    objectFit: "contain", // Maintain the aspect ratio and contain within the given dimensions
                  }}
                />
              </div>
              <div className="w-50 h-100"></div>
            </div>
            <div className="h-100 w-50 d-flex flex-row justify-content-evenly  ">
              <div className="w-50 h-100">
                <img
                  src={bath}
                  alt="Bath"
                  style={{
                    width: "100%", // Use 100% of the container's width
                    height: "100%", // Use 100% of the container's height
                    objectFit: "contain", // Maintain the aspect ratio and contain within the given dimensions
                  }}
                />
              </div>
              <div className="w-50 h-100"></div>
            </div>
          </div>
        </div>
        <div className="h-100 w-50 bg-danger  d-flex flex-column align-items-center">
          <Carousel className=" property-images-carousel" style={{ maxWidth: "100%" }}>
            {propertyImages.map((src, index) => (
              <Carousel.Item className=" carousel-item" key={index} onClick={() => openModal(index)}>
                <img className="d-block w-100" src={process.env.PUBLIC_URL + src} alt={`Slide ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <Container fluid className="p-0">
        {/* Carousel for property images */}
        {/* Carousel styling adjusted to match the desired layout */}

        {/* Property details and realtor information with adjusted layout */}
        <div className="property-realtor-wrapper mx-auto" style={{ maxWidth: "90%" }}>
          {/* Listing details taking up the majority of the width */}
          <div className="property-details">
            {/* Listing details with the favorites button at the top right */}
            <div className="listing-header" style={{ flexGrow: 1, marginRight: "15px" }}>
              {/* Add to Favorites Icon Button */}

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
