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

    //advanced search popup control
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };

    const closeModal = () => {
      setShowModal(false);
    };

    const search = () =>{
      alert("Searching!")
    };

    const addAdvancedFilter = () =>{
      alert("Adding Filter!")
      closeModal()
    };


     // Function to reset the map view to its default center and zoom level
     const handleResetMap = () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.setZoom(10);
          mapInstanceRef.current.panTo({ lat: 51.0447, lng: -114.0719 });
        }
      };

    //const selectedMarkerIcon = `${process.env.PUBLIC_URL}/icons/selectedMarkerIcon.png`;
    //const defaultMarkerIcon = `${process.env.PUBLIC_URL}/icons/defaultMarkerIcon.png`;



    /*
    // Define customMarkerSize inside useEffect or directly in Marker component after confirming mapsApiLoaded
    let customMarkerSize;
    if (mapsApiLoaded) {
        customMarkerSize = {
            scaledSize: new window.google.maps.Size(30, 30),
        };
    }

    //state for managing zoom level
    const [zoom, setZoom] = useState(10);

    // Ref for the map to enable programmatic control
    const mapRef = useRef(null);

    // Define a function to handle map load to access map instance
    const handleMapLoad = (map) => {
    mapRef.current = map;
    };

    useEffect(() => {
        // If a property is selected, zoom in on it
        if (selectedPropertyId) {
          const selectedListing = houseInfo.find(listing => listing.id === selectedPropertyId);
          if (selectedListing) {
            mapRef.current.panTo({ lat: parseFloat(selectedListing.lat), lng: parseFloat(selectedListing.lng) });
            setZoom(15); // Zoom in
          }
        } else {
          setZoom(10); // Reset zoom to default when no selection
        }
      }, [selectedPropertyId]);

    */


    //sorting by price funcrion 
    const sortListingByPrice = (order) => {
      const sortedListings = [...setDisplayedListings].sort((a,b) => {
        const PriceA = parseInt(a.price.replace(/[,]/g, ''), 10)
        const PriceB = parseInt(a.price.replace(/[,]/g, ''), 10)

        if (order == 'lowest'){
          return PriceA - PriceB
        }
        else if (order == 'highest'){
          return PriceB - PriceA
        }

      });

      setDisplayedListings(sortedListings);
    }

	// Helper function to create dropdown menus for Price, Beds, and Baths
	const createDropdown = (title, options, className) => (
        <Dropdown className={className}>
            <Dropdown.Toggle variant="outline-secondary" id={`dropdown-${title}`}>
                {title}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {options.map((option, idx) => (
                    <Dropdown.Item key={idx} eventKey={option}>
                        {option}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );


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



	return (

        <div style={{ height: "100vh", background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
            {/* Navbar */}
            <NavBar/>
            <Navbar expand="lg" className="bg-white">
                <Container>
                        <InputGroup>
                            <FormControl placeholder="City, Neighbourhood, Address or MLS number" aria-label="Search"style={{ width: "70vh" }} />
                            <FormControl placeholder="Min Price" aria-label="Search" style={{ width: "15vh" }}/>
                            <FormControl placeholder="Max Price" aria-label="Search"style={{ width: "15vh" }} />
                            <FormControl placeholder="Beds" aria-label="Search" style={{ width: "10vh" }}/>
                            <FormControl placeholder="Baths" aria-label="Search" style={{ width: "10vh" }}/>
                            <Button variant="outline-secondary" onClick={()=>{openModal()}}>
                                <img src={filterIcon} alt="Filter" width="24" height="24" />
                            </Button>
                            <Button variant="outline-secondary"  onClick={()=>{search()}}>
                                <img src={searchIcon} alt="Search" width="24" height="24" />
                            </Button>
                        </InputGroup>
                </Container>
            </Navbar>
            <div style={{display:"flex", paddingLeft:"10%"}}>
                    <p>hi</p>
                    <p>hi</p>
            </div>

		 {/* Content Area */}
		 <Container fluid className="search-results-content">
		 <Row className="no-gutters content-row">
              {/* Listings Column */}
			  <Col md={6} className="listings-column">
				{/* Sort By Dropdown */}
				<div className="sort-dropdown">
                    <DropdownButton id="sort-dropdown" title="Sort By">
                        <Dropdown.Item onSelect={() => sortListingByPrice('lowest')}> Loswest Price</Dropdown.Item>
                        <Dropdown.Item onSelect={() => sortListingByPrice('highest')}> Highest Price</Dropdown.Item>
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
          </Col>
        </Row>

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
    </div>
  );
}


export default SearchResults;