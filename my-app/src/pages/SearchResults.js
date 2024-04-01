import React from 'react';
import './SearchResults.css';
import { Row, Col, FormControl, InputGroup, Navbar, Container, Card, Nav, Dropdown, Button } from 'react-bootstrap';
import NavBar from './NavBar.js';
import favourites from "./Photos/favourites.png";
import logoIcon from "./Photos/logoAndName.png";
import backArrow from "./Photos/backArrow.png";
import map from "./Photos/map.png";
import house1 from "./Photos/house1.png";
import house2 from "./Photos/house2.png";
import searchIcon from "./Photos/searchIcon.png"; // Imported Search Icon
import filterIcon from "./Photos/filterIcon.png"; // Imported Filter Icon
import { DropdownButton } from 'react-bootstrap';



function SearchResults() {

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
		 <Container fluid className="p-0 search-results-content">
		 <Row noGutters className="content-row">
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
                            {/* Cards for Listing */}
				<Card className="listing-card">
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <img src={house1} alt="House at 123 Brookpark Ave." className="img-fluid" />
                      </Col>
                      <Col md={6}>
                        <Card.Title>123 Brookpark Ave.</Card.Title>
                        <Card.Text>
                          <ul>
                            <li>Price: $ 595,000</li>
                            <li>Bedrooms: 3</li>
                            <li>Bathrooms: 2</li>
                          </ul>
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
				{/* Card for listing 2 */}
				<Card className="listing-card">
					<Card.Body>
						<Row>
							<Col md={6}>
								<Card.Img variant="top" src={house2} />
							</Col>
							<Col md={6}>
								<Card.Title>481 Main Street</Card.Title>
								<Card.Text>
									<ul>
										<li>Price: $ 534,000</li>
										<li>Bedrooms: 2</li>
										<li>Bathrooms: 1</li>
									</ul>
								</Card.Text>
							</Col>
						</Row>
					</Card.Body>
					</Card>
                 </div>


				</Col>

                {/* Map Column */}
				<Col md={6} className="map-column">
                <img src={map} alt="Map" style={{ width: '100%', height: '100%' }} />
              </Col>
            </Row>
          </Container>
        </div>
    );
}

export default SearchResults;