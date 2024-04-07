import React, { useState, useEffect, useRef } from 'react';
import './SearchResults.css';
import { Row, Col, FormControl, InputGroup, Navbar, Container, Dropdown, Button, DropdownButton, Modal,Form } from 'react-bootstrap';
import NavBar from './NavBar.js';
import searchIcon from "./Photos/searchIcon.png";
import filterIcon from "./Photos/filterIcon.png";
import HouseCard from "./HouseCard";
import houseInfo from "./houseInfo.js"
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//check for implamentations on the hovering mechanism for the listing to map api

// google maps rendering
const render = (status) => {
    if (status === Status.LOADING) return <div>Loading...</div>;
    return null;
};

const MyMapComponent = ({ apiKey, listings, hoveredPropertyId, selectedPropertyId, onMapLoad }) => {
    const ref = useRef();
    // Ref to store the map object
    const mapRef = useRef(null);
    //ref to store all marker object
    const markersRef = useRef({});

    //loads map as defult state
    useEffect(() => {
      if (ref.current && !mapRef.current) {
        const map = new window.google.maps.Map(ref.current, {
          center: { lat: 51.0447, lng: -114.0719 },
          zoom: 10,
        });

        // Store the map object Pass the map object back to the parent component
        mapRef.current = map;
        if (onMapLoad) {
          onMapLoad(map);
        }

        //adds the markers on the google map
        const infoWindow = new window.google.maps.InfoWindow();
        listings.forEach((listing) => {
          const marker = new window.google.maps.Marker({
            position: { lat: parseFloat(listing.lat), lng: parseFloat(listing.lng) },
            map: map,
            title: listing.houseName,
          });

          //marker functionality
          marker.addListener('click', () => {
            infoWindow.setContent(`
              <div>
                <h5>${listing.houseName}</h5>
                <img src="${listing.image}" alt="House image" style="width:100px;"><br>
                Price: ${listing.price}<br>
                Bedrooms: ${listing.bedrooms}<br>
                Bathrooms: ${listing.bathrooms}
              </div>
            `);
            infoWindow.open(map, marker);
          });

          //storing each marker by listing id
          markersRef.current[listing.id] = marker;

        });
      }
    }, [listings, onMapLoad]);

    useEffect(() => {
      Object.entries(markersRef.current).forEach(([id, marker]) => {
        let icon = {
          url: marker.getIcon()?.url || 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',

        };

        // Adjust icon size based on hover state
        if (id === hoveredPropertyId) {
          // Enlarge the marker icon
          icon.scaledSize = new window.google.maps.Size(42, 42); // Enlarged size
        } else {
          // Reset to original size
          icon.scaledSize = new window.google.maps.Size(30, 30); // Original size
        }

        // Re-apply the icon to the marker
        marker.setIcon(icon);
      });
    }, [hoveredPropertyId]);

    useEffect(() => {
      if (selectedPropertyId && mapRef.current) {
        const listing = listings.find(listing => listing.id === selectedPropertyId);
        if (listing) {
          mapRef.current.setZoom(15);
          mapRef.current.panTo({ lat: parseFloat(listing.lat), lng: parseFloat(listing.lng) });
        }
      }
    }, [selectedPropertyId, listings]);

    return <div ref={ref} style={{ height: "100%", width: "100%" }} />;
};




function SearchResults() {

    const apiKey = "AIzaSyBwFfcnAy4EsP1jo88dc4KV3OnGsEqX5ec";


    // State to hold fileter/search listings
    const [displayedListings, setDisplayedListings] = useState(houseInfo);
    const [hoveredPropertyId, setHoveredPropertyId] = useState(null);
    const [selectedPropertyId, setSelectedPropertyId] = useState(null);
    //store google maps instance
    const mapInstanceRef = useRef(null);

    //regular searching states
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');

    //options for dropdown
    const priceOptions = ['100,000', '200,000', '300,000', '400,000', '500,000', '600,000'];
    const bedBathOptions = [1, 2, 3, 4, 5];
    

    //advanced search popup control
    const [showModal, setShowModal] = useState(false);

    //for updating sort dropdown title
    const [sortTitle, setSortTitle] = useState('Sort By');

    const location = useLocation();
    const user = location.state?.user;
    const navigate = useNavigate();

    const openModal = () => {
      setShowModal(true);
    };

    const closeModal = () => {
      setShowModal(false);
    };

    const search = () => {
      const minPriceValue = minPrice ? parseInt(minPrice.replace(/[,]/g, ''), 10) : 0;
      const maxPriceValue = maxPrice ? parseInt(maxPrice.replace(/[,]/g, ''), 10) : Infinity;
      const bedroomsValue = bedrooms ? parseInt(bedrooms, 10) : 0;
      const bathroomsValue = bathrooms ? parseInt(bathrooms, 10) : 0;
    
      const filteredListings = houseInfo.filter(listing => {
        const price = parseInt(listing.price.replace(/[$,]/g, ''), 10); 
        const listingBedrooms = parseInt(listing.bedrooms, 10);
        const listingBathrooms = parseInt(listing.bathrooms, 10);
        return (
          price >= minPriceValue &&
          price <= maxPriceValue &&
          listingBedrooms >= bedroomsValue &&
          listingBathrooms >= bathroomsValue
        );
      });
    
      setDisplayedListings(filteredListings);
    };
    
    
    //advance search filtering conditions table 
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

    const addAdvancedFilter = () =>{
      alert("Adding Filter!")
      closeModal()
    };

    const navigateToPage = (url) => {
      // This will reload the page and navigate to the new URL.
      window.location.href = url;
    };

    


     // Function to reset the map view to its default center and zoom level
     const handleResetMap = () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.setZoom(10);
          mapInstanceRef.current.panTo({ lat: 51.0447, lng: -114.0719 });
        }
      };

      const handleViewHouse = () => {
        if(selectedPropertyId!=null){
         navigate('/details', { state: { user,selectedPropertyId } });
        }
      };

    //sorting by price funcrion
    const sortListingByPrice = (order) => {

      const sortedListings = displayedListings.sort((a,b) => {
        var PriceA = parseInt(a.price.replace(/[,]/g, ''))
        var PriceB = parseInt(b.price.replace(/[,]/g, ''))
        if (order == 'lowest'){
          setSortTitle('Sort By: Price (Low to High)');
          return PriceA - PriceB
        }
        else if (order == 'highest'){
          setSortTitle('Sort By: Price (High to Low)');
          return PriceB - PriceA
        }

      });

      setDisplayedListings(sortedListings);

    };



    //function to handle mouse enter on property card
    const handleMouseEnter = (propertyId) => {
        setHoveredPropertyId(propertyId);
      };

    //function to handle mouse leave on property card
    const handleMouseLeave = () => {
        setHoveredPropertyId(null);
      };

    //function to handle click on property card
    const handleClick = (propertyId) => {
        setSelectedPropertyId(propertyId);
      };

    //fetch function to get information from houseinfo.js
    const getPropertyDetails = (houseId) => {
        return houseInfo.find(property => property.id === houseId);
      }
    
    const BedBathDropdown = ({ title, onChange }) => (
      <Form.Select aria-label={title} onChange={e => onChange(e.target.value)} className="me-2">
        <option>{title}</option>
        {[1, 2, 3, 4, 5].map(value => (
          <option key={value} value={value}>{value}</option>
        ))}
      </Form.Select>
    );
      



	return (

        <div style={{ height: "100vh", background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
            {/* Navbar */}
            <NavBar/>
              <Navbar expand="lg" className="bg-white">
                <Container>
                <Form className="d-flex align-items-center" style={{ gap: '0.5rem' }}>
                  <InputGroup>
                    <FormControl
                      placeholder="City, Neighbourhood, Address or MLS number"
                      aria-label="Search"
                      className="me-2"
                    />
                    <Dropdown as={InputGroup.Append}>
                      <Dropdown.Toggle variant="outline-secondary" id="dropdown-min-price">
                        Min Price
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {priceOptions.map((price, index) => (
                          <Dropdown.Item key={index} onClick={() => setMinPrice(price)}>
                            {price}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={InputGroup.Append}>
                      <Dropdown.Toggle variant="outline-secondary" id="dropdown-max-price">
                        Max Price
                        </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {priceOptions.map((price, index) => (
                          <Dropdown.Item key={index} onClick={() => setMaxPrice(price)}>
                            {price}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={InputGroup.Append}>
                      <Dropdown.Toggle variant="outline-secondary" id="dropdown-beds">
                        Beds
                        </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {bedBathOptions.map((number, index) => (
                          <Dropdown.Item key={index} onClick={() => setBathrooms(number)}>
                            {number}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={InputGroup.Append}>
                      <Dropdown.Toggle variant="outline-secondary" id="dropdown-baths">
                        Baths
                        </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {bedBathOptions.map((number, index) => (
                          <Dropdown.Item key={index} onClick={() => setBedrooms(number)}>
                            {number}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="outline-secondary" onClick={search}>
                      <img src={searchIcon} alt="Search" width="24" height="24" />
                    </Button>
                  </InputGroup>
                  <Button variant="outline-secondary" onClick={openModal}>
                    <img src={filterIcon} alt="Filter" width="24" height="24" />
                  </Button>
                </Form>

                  <Modal show={showModal} onHide={closeModal} size="md" centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Advanced Search Options</Modal.Title>
                    </Modal.Header>
                      <Modal.Body>

                        <Form style={{overflowY: "auto", maxHeight: "100%" }}>

                            <label for='Filter'>Filter</label>
                            <select id="Filter" >
                            <option value=""> </option>
                            <option value="noiseLevel">Noise Level</option>
                            <option value="safety">Safety</option>
                            <option value="walkability">Walkability</option>
                            <option value="petFriendly">Pet Friendly</option>
                            <option value="crimeRate">Crime Rate</option>
                            <option value="airQuality">Air Quality</option>
                            <option value="neighborhood">Neighbourhood</option>
                            <option value="shopping">Shopping</option>
                            <option value="transportation">Transportation</option>
                            <option value="schoolsHighschool">High Schools</option>
                            <option value="schoolsMiddle">Middle Schools</option>
                            <option value="schoolsElementary">Elementary Schools</option>
                            <option value="schoolsPreschools">Preschools</option>
                          </select>
                          <label for='Value'>Value</label>
                            <select id="Value" >
                            <option value=""> </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>


                        </Form>
                      </Modal.Body>
                    <Modal.Footer>
                  <Button variant="primary" onClick={()=>addAdvancedFilter()}>
                    Add Search Filter
                  </Button>
          </Modal.Footer>
        </Modal>


      </Container>
      </Navbar>
      


		 {/* Content Area */}
		 <Container fluid className="search-results-content">
		 <Row className="no-gutters content-row">
              {/* Listings Column */}
			  <Col md={6} className="listings-column">
				{/* Sort By Dropdown */}
				<div className="sort-dropdown">
                    <DropdownButton id="sort-dropdown" title={sortTitle}>
                        <Dropdown.Item onClick={() => sortListingByPrice('lowest')}> Price (Low to High)</Dropdown.Item>
                        <Dropdown.Item onClick={() => sortListingByPrice('highest')}> Price (High to Low)</Dropdown.Item>
                        {/* Add more sort options here */}
                    </DropdownButton>
                </div>

                {/* Scrollable Listings Container */}
                <div className="scrollable-listings">
                    {displayedListings.map((listing) => {
                    const details = getPropertyDetails(listing.id);
                    return (
                        <div
                            onMouseEnter={() => handleMouseEnter(listing.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(listing.id)}
                            key={listing.id}>
                            <HouseCard
                                className="listing-card"
                                Name={details.houseName}
                                Photo={details.image}
                                Price={details.price}
                                Description={details.description}
                                NumBath={details.bathrooms}
                                NumBed={details.bedrooms}
                            />
                        </div>
                    );
                })}
            </div>
		</Col>


        {/* Map Column */}
        <Col md={6} className="map-column">
            <Button onClick={handleResetMap} style={{ margin: "10px" }}>Reset Map View</Button>
            <Wrapper apiKey={apiKey} render={render}>
              <MyMapComponent
                apiKey={apiKey}
                listings={houseInfo}
                hoveredPropertyId={hoveredPropertyId}
                selectedPropertyId={selectedPropertyId}
                onMapLoad={(map) => mapInstanceRef.current = map} // Store the map instance when loaded
              />
            </Wrapper>
            <Button onClick={handleViewHouse} style={{ margin: "10px" }}>View House Details</Button>
          </Col>
        </Row>

       
      </Container>
    </div>
  );
}


export default SearchResults;