import React, { useState, useEffect, useRef } from 'react';
import './SearchResults.css';
import { Row, Col, FormControl, InputGroup, Navbar, Container, Dropdown, Button, DropdownButton } from 'react-bootstrap';
import NavBar from './NavBar.js';
import searchIcon from "./Photos/searchIcon.png"; 
import filterIcon from "./Photos/filterIcon.png"; 
import HouseCard from "./HouseCard";
import houseInfo from "./houseInfo.js"
import { Wrapper, Status } from "@googlemaps/react-wrapper";



// google maps rendering 
const render = (status) => {
    if (status === Status.LOADING) return <div>Loading...</div>;
    return null;
};
  
const MyMapComponent = ({ apiKey, listings, hoveredPropertyId, selectedPropertyId, onMapLoad }) => {
    const ref = useRef();
    const mapRef = useRef(null); // Ref to store the map object
  
    useEffect(() => {
      if (ref.current && !mapRef.current) {
        const map = new window.google.maps.Map(ref.current, {
          center: { lat: 51.0447, lng: -114.0719 },
          zoom: 10,
        });
  
        mapRef.current = map; // Store the map object
        if (onMapLoad) {
          onMapLoad(map); // Pass the map object back to the parent component
        }
  
        const infoWindow = new window.google.maps.InfoWindow();
        listings.forEach((listing) => {
          const marker = new window.google.maps.Marker({
            position: { lat: parseFloat(listing.lat), lng: parseFloat(listing.lng) },
            map: map,
            title: listing.houseName,
          });
  
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
        });
      }
    }, [listings, onMapLoad]);
  
    useEffect(() => {
      if (selectedPropertyId && mapRef.current) {
        // Assume listings is a flat array where each item has an id
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
                            <FormControl placeholder="City, Neighbourhood, Address or MLS number" aria-label="Search" />
                            {createDropdown("Min Price", ["$100,000", "$200,000", "$300,000"])} {/* Example options */}
                            {createDropdown("Max Price", ["$500,000", "$600,000", "$700,000"])}
                            {createDropdown("Beds", ["1", "2", "3"])}
                            {createDropdown("Baths", ["1", "2", "3"])}
                            <Button variant="outline-secondary">
                                <img src={searchIcon} alt="Search" width="24" height="24" />
                            </Button>
                            <Button variant="outline-secondary">
                                <img src={filterIcon} alt="Filter" width="24" height="24" />
                            </Button>
                        </InputGroup>
                </Container>
            </Navbar>

		 {/* Content Area */}
		 <Container fluid className="search-results-content">
		 <Row className="no-gutters content-row">
              {/* Listings Column */}
			  <Col md={6} className="listings-column">
				{/* Sort By Dropdown */}
				<div className="sort-dropdown">
                    <DropdownButton id="dropdown-item-button" title="Sort By">
                        <Dropdown.Item as="button">Newest</Dropdown.Item>
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
      </Container>
    </div>
  );
}


export default SearchResults;