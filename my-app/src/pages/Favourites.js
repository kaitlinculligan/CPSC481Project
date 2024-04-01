import React from 'react';
import './Favourites.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, FormControl, InputGroup, Navbar, Container, Card, Nav, Dropdown, Button } from 'react-bootstrap';
import hypeImage from "./Photos/hype.png";
import NavBar from './NavBar.js';
import house2 from "./Photos/house2.png"

function Favourites() {

  const navigateToPage = (url) => {
    // This will reload the page and navigate to the new URL.
    window.location.href = url;
  };


  //list of favorites
  const favoriteListings = [
    { id: 1, address: 'Address 1', price: 'Price 1' },
    { id: 2, address: 'Address 2', price: 'Price 2' },
    // ... other favorites
  ];

  return (
    <div style={{height: "100vh", background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
      <NavBar/>
      <div className="row" style={{height:"25px", width:"100px", paddingLeft:"45px"}}>
        <h1>Favourites</h1>
      </div>
      <br></br>
      <br></br>


      {/* Favorites Listings */}

      {favoriteListings.map((listing) => (
        <div key={listing.id} className="row justify-content-center" style={{ margin: "5px 0", padding: "3px", width:"75%"}}>
          <Card className="listing-card">
					<Card.Body>
						<Row>
							<Col md={4}>
								<Card.Img variant="top" src={house2} />
							</Col>
							<Col md={4}>
								<Card.Title>481 Main Street</Card.Title>
								<Card.Text>
                  <p>Info about house</p>
									<ul>
										<li>$ 534,000</li>
										<li>Bedrooms: 2</li>
										<li>Bathrooms: 1</li>
									</ul>
								</Card.Text>
							</Col>
              <Col md={4} className="row justify-content-center"><button className="button" style={{width:"100px", height:"50px", backgroundColor:"red", color:"white" }}>Delete</button></Col>
						</Row>
					</Card.Body>
					</Card>
        </div>
      ))}


    </div>
  );
}

export default Favourites;
