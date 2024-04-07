import React from 'react';
import './Favourites.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, FormControl, InputGroup, Navbar, Container, Card, Nav, Dropdown, Button, Modal} from 'react-bootstrap';
import hypeImage from "./Photos/hype.png";
import NavBar from './NavBar.js';
import house2 from "./Photos/house2.png"

import  houseInfo  from './houseinfo.json';
import HouseCardFav from "./HouseCardFav.js";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Favourites() {

  const location = useLocation();
  const { user} = location.state
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [id, setId] = useState("-1");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openModal = (id) => {setId(id)
    handleShow()
  };

  const navigateToPage = (url) => {
    // This will reload the page and navigate to the new URL.
    window.location.href = url;
  };

  const handleDeleteFavourite = async (id) => {
    try {
      var houseId = String(id)
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
      } else {
        throw new Error("Failed to update Jack's favorite status.");
      }
    } catch (error) {
      console.error("Error:", error);

    handleClose()
    navigate('/favourites', { state: { user } });
};
}
  return (
    <div style={{height: "100vh", background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
      <NavBar/>
      <div className="row" style={{height:"25px", width:"100px", paddingLeft:"45px"}}>
        <h1>Favourites</h1>
      </div>
      <br></br>
      <br></br>


      {/* Favorites Listings */}


      {houseInfo.filter((house) => house.jackFavourite === "yes")
                    .map((house) =>(
        <div className="row justify-content-center" style={{margin:"5px, 0",  width:"75%",height:"100%", maxHeight:"100%"}}>
          <Card className="listing-card justify-content-center"style={{ height:"100%"}}>

					<Card.Body>
						<Row style={{height:"65%"}}>
              <Col >

            <HouseCardFav
                          Name={house.houseName}
                          Photo={house.photos[0]}
                          Price={house.price}
                          NumBath={house.bathrooms}
                          Description={house.description}
                          NumBed={house.bedrooms}
                        />
                        </Col>
              <Col md={4} className="row justify-content-center">
                <Row></Row>
                <Row>

                <button className="button"
              onClick={() => {navigate("/details", {state: user, house: house.id})}}
              style={{width:"80%", height:"40%", backgroundColor:"blue", color:"white" }}>View Details</button>
              </Row>
                <Row>
                <button className="button"
              onClick={() => {openModal(house.id)}}
              style={{width:"80%", height:"40%", backgroundColor:"red", color:"white" }}>Delete</button>

              </Row>
              <Row></Row>
              </Col>
						</Row>
					</Card.Body>
					</Card>
        </div>
      ))}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

          <Modal.Title>Remove {houseInfo.at(id-1).houseName} from favorites?</Modal.Title>

        </Modal.Header>
        <Modal.Body>
        <button className="button"
              onClick={() => {handleDeleteFavourite(id)}}
              style={{width:"55%", height:"65%", backgroundColor:"#10a690", color:"white",margin: "0 20%" }}>Remove from favourites</button>
        </Modal.Body>
      </Modal>

    </div>
  );

}
export default Favourites;
