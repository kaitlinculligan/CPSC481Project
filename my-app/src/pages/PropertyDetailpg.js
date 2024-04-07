import React, { useState } from "react";
import "./PropertyDetailpg.css";
import { Carousel, Container, Card, Modal, Button, Tab, Tabs } from "react-bootstrap";
import NavBar from "./NavBar.js";
import bed from "./Photos/Bed.png";
import bath from "./Photos/Bath.png";
import { useLocation } from "react-router-dom";
import houseInfo from "./houseinfo.json";
import { useEffect } from "react";
import { Badge, OverlayTrigger, Tooltip, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import realtor from "./Photos/realtor.png";
import heart from "./Photos/Heart-Emoji-PNG-Photos.png";
import CustomAlert from "./CustomAlert";

const RealtorCard = ({ imageSrc, name, number, email, user, id }) => {
  const navigate = useNavigate();
  return (
    <div className="card" style={{ width: "18rem", textAlign: "center" }}>
      <img src={imageSrc} className="card-img-top pt-1" alt="Realtor" style={{ width: "100px", height: "100px", borderRadius: "50%", margin: "0 auto" }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{number}</p>
        <p className="card-text">{email}</p>
        <button className="btn btn-primary" onClick={()=>navigate(("/appointment", {state: {user,id}}))}>
          Book Now
        </button>
      </div>
    </div>
  );
};

function RatingsGroup({ houseDetails }) {
  const safetyTable = {
    1: "100+ on crime severity index -Dangerous area",
    2: "70-100 on crime severity index - High crime rate",
    3: "50-70 on crime severity index - Average crime rate",
    4: "20-50 on crime severity index - Low crime rate",
    5: "0-20 on crime severity index - Safe area",
  };
  const noiseTable = {
    1: "Very noisy 110-90 dB on average",
    2: "Noisy 90-70 dB on average",
    3: "Average noise 70-50 dB on average",
    4: "Quiet 50-30 dB on average",
    5: "Silent 30-0 dB on average",
  };
  const shoppingTable = {
    1: "Only online shopping and major goods stores 10 minute drive away",
    2: "Major goods within 10 minute drive",
    3: "Major goods within 5 min drive and 5-10 shops in 5 minute walking distance",
    4: "Major goods within 5 min drive and 10+ shops in 5 minute walking distance",
    5: "Major shopping cnter within 5 min drive and 20+ shops in 5 minute walking distance",
  };
  const transportationTable = {
    1: "No public transportation close by",
    2: " 1-2 Bus stops within 5 minute walk, no train station nearby",
    3: "3-4 Bus stops within 5 minute walk, no train station nearby",
    4: "Train station within 5 minute walk, 5+ bus stops within 5 minute walk",
    5: "Train station within 5 minute walk, 10+ bus stops within 5 minute walk",
  };
  const highSchoolTable = {
    1: "no high school nearby",
    2: "1-2 high schools nearby",
    3: "3-4 high schools nearby",
    4: "5-6 high schools nearby",
    5: "7+ high schools nearby",
  };
  const middleSchoolTable = {
    1: "no middle school nearby",
    2: "1-2 middle schools nearby",
    3: "3-4 middle schools nearby",
    4: "5-6 middle schools nearby",
    5: "7+ middle schools nearby",
  };
  const elementarySchoolTable = {
    1: "no elementary school nearby",
    2: "1-2 elementary schools nearby",
    3: "3-4 elementary schools nearby",
    4: "5-6 elementary schools nearby",
    5: "7+ elementary schools nearby",
  };
  const preSchoolTable = {
    1: "no preschool nearby",
    2: "1-2 preschools nearby",
    3: "3-4 preschools nearby",
    4: "5-6 preschools nearby",
    5: "7+ preschools nearby",
  };
  const cleanlinessTable = {
    1: "1/5 on the Calgary cleanliness index - Very dirty - Garbage everywhere, graffiti, and vandalism",
    2: "2/5 on the Calgary cleanliness index - Dirty - Garbage on the streets, some graffiti and vandalism",
    3: "3/5 on the Calgary cleanliness index - Average - Some garbage on the streets, little graffiti and vandalism",
    4: "4/5 on the Calgary cleanliness index - Clean - little garbage on the streets, no graffiti and vandalism",
    5: "5/5 on the Calgary cleanliness index - Very clean - No garbage on the streets, no graffiti and vandalism",
  };
  const poolTable = {
    1: "No pool",
    5: "Olympic pool",
  };
  const walkabilityTable = {
    1: "No sidewalks, no easy access to ammenities without transportation",
    2: "Few sidewalks, some ammenities within walking distance",
    3: "Some sidewalks, many ammenities within walking distance",
    4: "Many sidewalks, most ammenities within walking distance",
    5: "Pedestrian paradise, all ammenities within walking distance including parks, schools, shopping centers, health centers, etc.",
  };
  const petFriendlyTable = {
    1: "No pets allowed",
    2: "Small pets allowed - Such as fish, hamsters, etc.",
    3: "Cats and dogs are allowed - Some restrictions apply",
    4: "Exotic pets allowed - Some restrictions apply",
    5: "All pets allowed - Within the bounds of the law",
  };

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>Neighborhood Ratings</Card.Title>
        <Row>
          <Card.Header>Schools</Card.Header>
          <Col>
            <Rating label="High School" value={parseInt(houseDetails.highSchool, 10)} descriptions={highSchoolTable} />
          </Col>
          <Col>
            <Rating label="Middle School" value={parseInt(houseDetails.middleSchool, 10)} descriptions={middleSchoolTable} />
          </Col>
          <Col>
            <Rating label="Elementary School" value={parseInt(houseDetails.elementarySchool, 10)} descriptions={elementarySchoolTable} />
          </Col>
          <Col>
            <Rating label="Pre-School" value={parseInt(houseDetails.preSchool, 10)} descriptions={preSchoolTable} />
          </Col>
        </Row>
        <Row>
          <Card.Header>Amenities</Card.Header>
          <Col>
            <Rating label="Shopping" value={parseInt(houseDetails.shopping, 10)} descriptions={shoppingTable} />
          </Col>
          <Col>
            <Rating label="Transportation" value={parseInt(houseDetails.transportation, 10)} descriptions={transportationTable} />
          </Col>
          <Col>
            <Rating label="Pet Friendly" value={parseInt(houseDetails.petFriendly, 10)} descriptions={petFriendlyTable} />
          </Col>
          <Col>
            <Rating label="Walkability" value={parseInt(houseDetails.walkability, 10)} descriptions={walkabilityTable} />
          </Col>
          <Col>
            {" "}
            <Rating label="Pool" value={houseDetails.pool} descriptions={poolTable}></Rating>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Card.Header>Health and Safety</Card.Header>
          <Col>
            <Rating label="Safety" value={parseInt(houseDetails.safety, 10)} descriptions={safetyTable} />
          </Col>
          <Col>
            <Rating label="Noise Level" value={parseInt(houseDetails.noiseLevel, 10)} descriptions={noiseTable} />
          </Col>
          <Col>
            <Rating label="Cleanliness" value={parseInt(houseDetails.cleanliness, 10)} descriptions={cleanlinessTable} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

function Rating({ label, value, descriptions }) {
  const ratingBadgeClasses = {
    1: "bg-danger",
    2: "bg-warning",
    3: "bg-secondary",
    4: "bg-info",
    5: "bg-success",
  };

  const ratingTexts = {
    1: "Poor",
    2: "Below Average",
    3: "Average",
    4: "Good",
    5: "Excellent",
  };

  var description = descriptions[value] || "Info not available";
  var badgeClass = ratingBadgeClasses[value] || "bg-light text-dark";
  var text = ratingTexts[value] || "Unknown";
  if (value === "yes") {
    console.log("POOL:", value);
    text = "Pool Included";
    badgeClass = "bg-success";
    description = "Pool included";
  }
  if (value === "no") {
    console.log("POOL:", value);
    text = "No Pool";
    badgeClass = "bg-danger";
    description = "No pool included";
  }

  // Tooltip component
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {description}
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <Badge
        pill
        className={`${badgeClass} rating-badge p-2 fs-5 mx-1`}
        style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "auto" }}
      >
        {label}: {text}
      </Badge>
    </OverlayTrigger>
  );
}
function PropertyDetailPage() {
  const [showModal, setShowModal] = useState(false);
  const [favouriteMessage, setfavouriteMessage] = useState("");
  const [showFavModal, setShowFavModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [houseDetails, setHouseDetails] = useState({
    address: "",
    price: "",
    middleSchool: "",
    highSchool: "",
    elementarySchool: "",
    preSchool: "",
    pool: "NA",
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
    jackFavourite: "",
  });
  const location = useLocation();
  const { user, id } = location.state || {};
  const navigate = useNavigate();
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
          console.log("loadedImages ",loadedImages)
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
          preSchool: property.schoolsPreschool || "",
          pool: property.pool || "NA",
          shopping: property.shopping || "",
          transportation: property.transportation || "",
          safety: property.safety || "",
          squareFeet: property.sqft || "",
          bedrooms: property.bedrooms || 0,
          bathrooms: property.bathrooms || 0,
          noiseLevel: property.noiseLevel || "",
          description: property.description || "",
          cleanliness: property.cleanliness || "",
          walkability: property.walkability || "",
          petFriendly: property.petFriendly || "",
          jackFavourite: property.jackFavourite || "",
        });
      }
      console.log("House Details:", houseDetails);
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

  const openFavModal = () => {
    setShowFavModal(true);
  };

  const closeFavModal = () => {
    setShowFavModal(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? propertyImages.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to format bedroom and bathroom counts
  const formatRooms = (bedrooms, bathrooms) => {
    return `${bedrooms} Bedroom${bedrooms > 1 ? "s" : ""}, ${bathrooms} Bathroom${bathrooms > 1 ? "s" : ""}`;
  };
  const [alertColor, setAlertColor] = useState("#FFFFFF");

  const handleBooking = (id) => {
    navigate('/appointment', { state: { user,id } });
  };

  const handleAddToFavourites = async (houseId, houseDetails) => {
    if (user === "" || user === undefined) {
      navigate("/login");
      return;
    }

    console.log("houseDetails:", houseDetails);

    if (houseDetails.jackFavourite === "yes") {
      try {
        const response = await fetch("http://localhost:5000/update-house-info", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: houseId,
            updates: { jackFavourite: "no" },
          }),
        });

        if (response.ok) {
          console.log("Success:", await response.json());
          setAlertColor("#a1712f");
          showAlert("Removed form favourites!");
        } else {
          // Assuming a non-ok response is an error condition
          setAlertColor("#b03c30")
          showAlert("Failed to update Jack's favorite status.");
        }
      } catch (error) {
        console.error("Error:", error);
        setAlertColor("#b03c30")
        showAlert(error.toString());
      }
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/update-house-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: houseId,
          updates: { jackFavourite: "yes" },
        }),
      });

      if (response.ok) {
        console.log("Success:", await response.json());
        setAlertColor("#4dba32");
        showAlert("Added To Favourites!");
      } else {
        // Assuming a non-ok response is an error condition
        setAlertColor("#b03c30")
        showAlert("Failed to update Jack's favorite status.");
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertColor("#b03c30")
      showAlert(error.toString());
    }
  };
  const [alertVisible, setAlertVisible] = useState(false);
  const [message, setMessage] = useState("");
  let alertTimeout = null;
  const [fadeClass, setFadeClass] = useState('');

const showAlert = (message) => {
  setMessage(message);
  setAlertVisible(true);
  setFadeClass(''); // Reset fade class to remove any previous fade-out animation

  // Clear any existing timeout to avoid unexpected behavior
  if (alertTimeout) {
    clearTimeout(alertTimeout);
  }

  // Wait 4 seconds, then start the fade-out animation
  alertTimeout = setTimeout(() => {
    setFadeClass('fade-out'); // Start fade-out
    // Then, after 1 second (duration of the fade-out), hide the alert completely
    setTimeout(() => {
      setAlertVisible(false);
    }, 1000); // This should match the fade-out animation time
  }, 1500); // Adjust time based on how long you want the alert to be visible before fading out
};

  return (
    <div style={{ height: "700px", background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
      {/* Navigation bar at the top */}
      <NavBar />
      <div className="h-50 w-100 d-flex flex-row  ">
        <div className="h-100 w-50 d-flex flex-column align-items-center">
          <div className="w-100 h-50 d-flex flex-row justify-content-center" style={{ fontSize: "55px", fontWeight: "bold" }}>
            {houseDetails.address}
          </div>
          <div className="w-100 h-25 d-flex flex-row justify-content-center" style={{ fontSize: "30px", fontWeight: "bold" }}>
            <p>
              Square footage: {houseDetails.squareFeet} | Price: ${houseDetails.price}
            </p>
          </div>

          <div className="w-100 h-25 d-flex flex-row justify-content-center  ">
            <div className="h-100 w-50 d-flex flex-row justify-content-evenly  border border-3 border-black ms-3">
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

                <p className="ps-5" style={{ fontWeight: "light", fontStyle: "italic" }}>
                  beds
                </p>
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

                <p className="ps-5" style={{ fontWeight: "light", fontStyle: "italic" }}>
                  baths
                </p>
              </div>
              <div className="w-50 h-100 pt-3" style={{ fontSize: "30px", fontWeight: "bolder" }}>
                {houseDetails.bathrooms}
              </div>
            </div>
          </div>
        </div>
        <div className="h-100 d-flex flex-row justify-content-evenly border border-5 border-black bg-black m-3" style={{ width: "45%" }}>
          <Carousel className=" property-images-carousel" style={{ maxWidth: "100%" }}>
            {propertyImages.map((src, index) => (
              <Carousel.Item className=" carousel-item" key={index} onClick={() => openModal(index)}>
                <img className="d-block w-100" src={src} alt={`Slide ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <Container fluid className="pt-2">
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
          <div className="pictureButton w-50 h-100 d-flex flex-column align-items-left ">
            <Button
              onClick={() => {
                openModal(0);
              }}
              style={{ marginBottom: "10px", marginTop: "25px", marginLeft: "5%", width: "75%" }}
            >
              View More Pictures
            </Button>
            <div className="w-100 h-100 d-flex flex-row justify-content-evenly ">
              <div className="w-50 h-100 d-flex flex-row justify-content-evenly mt-5 ">
                <div className="" style={{ fontWeight: " bold", fontSize: "20px" }}>
                  Add To Favourites
                </div>
                <div className="hover-label-container justify-content-center" style={{ position: "relative", display: "inline-block" }}>
                  <img
                    src={heart}
                    className="border border-4 border-black img-hover-effect"
                    alt="Heart"
                    style={{
                      cursor: "pointer",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "0 auto",
                      transition: "transform 0.3s ease", // Add transition for smoothness
                    }}
                    onClick={() => handleAddToFavourites(id, houseDetails)}
                  />
                  <span
                    className="favourite-label" // Added class for styling
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%) translateY(100%)", // Adjusted for visibility below the heart
                      visibility: "hidden",
                      whiteSpace: "nowrap",
                      backgroundColor: "black",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      fontSize: "14px",
                      transition: "visibility 0.3s, opacity 0.3s ease", // Transition for a smooth effect
                      opacity: 0, // Start as invisible
                    }}
                  >
                    Add to Favourites
                  </span>
                  {alertVisible && <CustomAlert message={message} fadeClass={fadeClass} color={alertColor} onClose={() => setAlertVisible(false)} />}
                </div>
              </div>
              <div className="w-50 h-100 d-flex flex-row justify-content-center p-1">
              <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                <img src={realtor} className="card-img-top pt-1" alt="Realtor" style={{ width: "100px", height: "100px", borderRadius: "50%", margin: "0 auto" }} />
                <div className="card-body">
                  <h5 className="card-title">John Realtor</h5>
                  <p className="card-text">403-899-4547</p>
                  <p className="card-text">JohnDoesHomes@gmail.com</p>
                  <button className="btn btn-primary" onClick={() =>handleBooking(id)}>
                    Book Now
                  </button>
                </div>
              </div>

              </div>
            </div>
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

        {/* Modal for add to favourites  */}
        <Modal show={showFavModal} onHide={closeFavModal} size="md" centered>
          <Modal.Header closeButton>
            <Modal.Title>Add to Favourites</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{favouriteMessage}</p>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}
export default PropertyDetailPage;