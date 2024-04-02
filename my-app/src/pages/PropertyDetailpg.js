import React, { useState } from "react";
import "./PropertyDetailpg.css";
import { Carousel, Container, Navbar, Nav, Card, Modal, Button, Tab, Tabs } from "react-bootstrap";
import NavBar from "./NavBar.js";
import realtorImage from "./Photos/profileLogo.png";
import bed from "./Photos/Bed.png";
import bath from "./Photos/Bath.png";
import { useLocation } from "react-router-dom";
import houseInfo from "./houseinfo.json";
import { useEffect } from "react";
import { Badge, OverlayTrigger, Tooltip, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function RatingsGroup({ houseDetails }) {
  const saeftyTable ={
    1: 'High crime rate',
    2: 'Moderate crime rate',
    3: 'Average crime rate',
    4: 'Low crime rate',
    5: 'Zero Crime :)',
  }
  const noiseTable ={
    1: 'Very noisy 110-90 dB',
    2: 'Noisy 90-70 dB',
    3: 'Average noise 70-50 dB',
    4: 'Quiet 50-30 dB',
    5: 'Silent 30-0 dB',
  }
  const shoppingTable ={
    1: 'No shopping nearby',
    2: 'Few shops nearby',
    3: 'Average shopping nearby',
    4: 'Many shops nearby',
    5: 'Shopping paradise in walking distance',
  }
  const transportationTable ={
    1: 'No public transportation',
    2: 'Few public transportation options',
    3: 'Average public transportation options',
    4: 'Many public transportation options',
    5: 'Public transportation hub',
  }
  const highSchoolTable ={
    1: 'no high school nearby',
    2: '1-2 high schools nearby',
    3: '3-4 high schools nearby',
    4: '5-6 high schools nearby',
    5: '7+ high schools nearby',
  }
  const middleSchoolTable ={
    1: 'no middle school nearby',
    2: '1-2 middle schools nearby',
    3: '3-4 middle schools nearby',
    4: '5-6 middle schools nearby',
    5: '7+ middle schools nearby',
  }
  const preSchoolTable ={
    1: 'no preschool nearby',
    2: '1-2 preschools nearby',
    3: '3-4 preschools nearby',
    4: '5-6 preschools nearby',
    5: '7+ preschools nearby',
  }
  const cleanlinessTable ={
    1: 'Very dirty',
    2: 'Dirty',
    3: 'Average cleanliness',
    4: 'Clean',
    5: 'Spotless',
  }
  const walkabilityTable ={
    1: 'No sidewalks',
    2: 'Few sidewalks',
    3: 'Average walkability',
    4: 'Many sidewalks',
    5: 'Pedestrian paradise',
  }
  const petFriendlyTable ={
    1: 'No pets allowed',
    2: 'small pets allowed',
    3: 'cats and dogs are allowed',
    4: 'Many pets allowed',
    5: 'Pet paradise',
  }

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>Neighborhood Ratings</Card.Title>
        <div className="d-flex flex-column ailgn-items-center">
        <Card.Header>Schools</Card.Header>
          <div className="d-flex flex-row justify-content-center"></div>
          <Card.Header>Amenities</Card.Header>
          <div className="d-flex flex-row justify-content-center"></div> 
          <Card.Header>Health and safety</Card.Header>
        </div>
      </Card.Body>
    </Card>
  );
}

function Rating({ label, value, descriptions }) {
  const ratingBadgeClasses = {
    1: 'bg-danger',
    2: 'bg-warning',
    3: 'bg-secondary',
    4: 'bg-info',
    5: 'bg-success',
  };

  const ratingTexts = {
    1: 'Poor',
    2: 'Below Average',
    3: 'Average',
    4: 'Good',
    5: 'Excellent',
  };

  const description = descriptions[value] || 'Info not available';
  const badgeClass = ratingBadgeClasses[value] || 'bg-light text-dark';
  const text = ratingTexts[value] || 'Unknown';

  // Tooltip component
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {description}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      overlay={renderTooltip}
    >
      <Badge pill className={`${badgeClass} rating-badge p-2 fs-5 mx-1`} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 'auto' }}>
        {label}: {text}
      </Badge>
    </OverlayTrigger>
  );
}
function PropertyDetailPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [houseDetails, setHouseDetails] = useState({
    address: "",
    price: "",
    middleSchool: "",
    highSchool: "",
    elementarySchool: "",
    preSchool: "",
    pool: "no", // Assuming a boolean value, adjust as necessary
    shopping: "",
    transportation: "",
    safety: "",
    squareFeet: "",
    bedrooms: 0,
    bathrooms: 0,
    noiseLevel: "",
    description: "",
    cleanliness: "",
    walkability: "",
    petFriendly: "",

  });
  const location = useLocation();
  const { user, id } = location.state || {};
  let houseId = String(id);
  console.log("id:", id);
  const [propertyImages, setPropertyImages] = useState([]);
  const [address, setAddress] = useState("");
  useEffect(() => {
    // Function to find the property by ID and set images
    const getPropertyImages = (houseId) => {
      const property = houseInfo.find((property) => property.id === houseId);
      if (property && property.photos) {
        // Dynamically require the images based on paths
        const loadedImages = property.photos
          .map((photoPath) => {
            try {
              return require(`${photoPath}`);
            } catch (err) {
              console.error(`Failed to load image at ${photoPath}`, err);
              return null;
            }
          })
          .filter((image) => image != null); // Filter out any nulls in case of errors

        setPropertyImages(loadedImages);
      }
    };

    getPropertyImages(houseId);
  }, [houseId]);
  useEffect(() => {
    const getHouseDetails = (houseId) => {
      const property = houseInfo.find((property) => property.id === houseId);
      if (property) {
        setHouseDetails({
          address: property.houseName || "",
          price: property.price || "",
          middleSchool: property.schoolsMiddle || "",
          highSchool: property.schoolsHighschool || "",
          elementarySchool: property.schoolsElementary || "",
          preSchool: property.schoolspreSchool || "",
          pool: property.pool || false,
          shopping: property.shopping || "",
          transportation: property.transportation || "",
          safety: property.safety || "",
          squareFeet: property.squareFeet || "",
          bedrooms: property.bedrooms || 0,
          bathrooms: property.bathrooms || 0,
          noiseLevel: property.noiseLevel || "",
          description: property.description || "",
          cleanliness: property.cleanliness || "",
          walkability: property.walkability || "",
          petFriendly: property.petFriendly || "",
        });
      }
    };

    getHouseDetails(houseId);
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
      <div className="h-50 w-100 d-flex flex-row  ">
        <div className="h-100 w-50 d-flex flex-column align-items-center">
          <div className="w-100 h-50 d-flex flex-row justify-content-center" style={{ fontSize: "85px", fontWeight: "bold" }}>
            {houseDetails.address}
          </div>
          <div className="w-100 h-25 d-flex flex-row justify-content-center text-uppercase" style={{ fontSize: "65px", fontWeight: "bolder" }}>
            ${houseDetails.price}
          </div>
          <div className="w-100 h-25 d-flex flex-row justify-content-center  ">
            <div className="h-100 w-50 d-flex flex-row justify-content-evenly  border border-3 border-black">
              <div className="w-50 h-100 col">
                <div className="w-75 h-75">
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

                <p1 className="ps-5" style={{ fontWeight: "light", fontStyle: "italic" }}>
                  beds
                </p1>
              </div>
              <div className="w-50 h-100 pt-3" style={{ fontSize: "30px", fontWeight: "bolder" }}>
                {houseDetails.bedrooms}
              </div>
            </div>
            <div className="h-100 w-50 d-flex flex-row justify-content-evenly border border-3 border-black ">
              <div className="w-50 h-100 col">
                <div className="w-75 h-75">
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

                <p1 className="ps-5" style={{ fontWeight: "light", fontStyle: "italic" }}>
                  baths
                </p1>
              </div>
              <div className="w-50 h-100 pt-3" style={{ fontSize: "30px", fontWeight: "bolder" }}>
                {houseDetails.bathrooms}
              </div>
            </div>
          </div>
        </div>
        <div className="h-100 d-flex flex-row justify-content-evenly border border-5 border-black rounded-5 bg-black m-3" style={{ width: "45%" }}>
          <Carousel className=" property-images-carousel" style={{ maxWidth: "100%" }}>
            {propertyImages.map((src, index) => (
              <Carousel.Item className=" carousel-item" key={index} onClick={() => openModal(index)}>
                <img className="d-block w-100" src={src} alt={`Slide ${index}`} />
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

              <div></div>
            </div>
            {/* Tabs for property description and neighborhood information */}
            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
              <Tab eventKey="description" title="Description">
                <div className="w-100 h-100 d-flex flex-column align-items-start ">
                  <p>{houseDetails.description}</p>
                </div>
              </Tab>
              <Tab eventKey="neighborhood" title="Neighborhood">
                <RatingsGroup houseDetails={houseDetails} />
              </Tab>
            </Tabs>
          </div>
        </div>

        {/* Modal for enlarged image view */}
        <Modal show={showModal} onHide={closeModal} size="md" centered>
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
