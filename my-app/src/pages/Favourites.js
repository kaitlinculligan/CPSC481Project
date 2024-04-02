import React from 'react';
import './Favourites.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, FormControl, InputGroup, Navbar, Container, Card, Nav, Dropdown, Button } from 'react-bootstrap';
import hypeImage from "./Photos/hype.png";
import NavBar from './NavBar.js';
import house2 from "./Photos/house2.png"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import houseInfo from "./houseInfo.js"
import HouseCard from "./HouseCard.js";
import { useRef } from 'react';


function Favourites() {

  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();


  const navigateToPage = (url) => {
    window.location.href = url;
  };

  const handleDeleteFavourite = (id) => {
    const houseToUpdate = houseInfo.find(house => house.id === id);
    alert(houseToUpdate.jackFovorite)
    houseToUpdate.jackFovorite = "no";

    alert(houseInfo.find(house => house.id === id).jackFovorite)
    navigate('/favourites', { state: { user } });
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
      {/*onClick={() => {navigate("/details", {state: user, house: house.id})}}*/}
      {houseInfo.filter((house) => house.jackFovorite === "yes")
                    .map((house) =>(
        <div  className="row justify-content-center" style={{ margin: "5px 0", padding: "3px", width:"75%"}}>
          <Card>
					<Card.Body>
						<Row style={{height:"50%"}}>
              <Col onClick={() => {navigate("/details", {state: user, house: house.id})}}>

            <HouseCard
                          Name={house.houseName}
                          Photo={house.photos[0]}
                          Price={house.price}
                          NumBath={house.bathrooms}
                          Description={house.description}
                          NumBed={house.bedrooms}
                        />
                        </Col>
              <Col md={4} className="row justify-content-center">
                <button className="button"
              onClick={() => {handleDeleteFavourite(house.id)}}
              style={{width:"100px", height:"50px", backgroundColor:"red", color:"white" }}>Delete</button></Col>
						</Row>
					</Card.Body>
					</Card>
        </div>
      ))}


    </div>
  );
}

export default Favourites;
