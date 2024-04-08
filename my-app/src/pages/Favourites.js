import React from "react";
import "./Favourites.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Modal, Button } from "react-bootstrap";
import NavBar from "./NavBar.js";
import houseInfo from "./houseinfo.json";
import HouseCardFav from "./HouseCardFav.js";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Favourites() {
  const location = useLocation();
  const { user } = location.state;
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [house, setHouse] = useState("-1");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openModal = (hId) => {
    setHouse(hId);
    handleShow();
  };

  const handleNavigateDetails = (id) => {
    navigate("/details", { state: { user, id } });
  };

  const handleDeleteFavourite = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/update-house-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: String(id),
          updates: { jackFavourite: "no" },
        }),
      });

      if (response.ok) {
        console.log("Success:", await response.json());
        handleClose();
      } else {
        throw new Error("Failed to update Jack's favorite status.");
      }
    } catch (error) {
      console.error("Error:", error);
      navigate("/favourites", { state: { user } });
    }
  };

  // Filter the houses that are marked as favourites
  const favouriteHouses = houseInfo.filter((house) => house.jackFavourite === "yes");

  return (
    <div style={{ height: "100vh", background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
      <NavBar />
      <div className="row" style={{ height: "25px", width: "100px", paddingLeft: "45px" }}>
        <h1>Favourites</h1>
      </div>
      <br />

      {/* Check if there are favourites */}
      {favouriteHouses.length > 0 ? (
        favouriteHouses.map((house) => (
          <div className="row justify-content-center" style={{ margin: "5px, 0", width: "75%", height: "100%", maxHeight: "100%" }}>
            <Card className="listing-card justify-content-center" style={{ height: "100%" }}>
              <Card.Body>
                <Row style={{ height: "65%" }}>
                  <Col>
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
                    <Row />
                    <Row>
                      <button
                        className="button"
                        onClick={() => {
                          handleNavigateDetails(house.id);
                        }}
                        style={{ width: "80%", height: "40%", backgroundColor: "#0056b3", color: "white" }}
                      >
                        View Details
                      </button>
                    </Row>
                    <Row>
                      <button
                        className="button"
                        onClick={() => {
                          openModal(house.id);
                        }}
                        style={{ width: "80%", height: "40%", backgroundColor: "red", color: "white" }}
                      >
                        Delete
                      </button>
                    </Row>
                    <Row />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <div className="w-100 h-100 text-center d-flex flex-column justify-content-center align-items-center">
          <h1>There are no favourites yet.</h1>
          <div style={{ width: "15%", minWidth: "150px" }} className="mx-auto">
            <Button onClick={() => navigate("/search", { state: { user } })}>Search for houses</Button>
          </div>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove {houseInfo.at(house - 1).houseName} from favorites?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button
            className="button"
            onClick={() => {
              handleDeleteFavourite(house);
            }}
            style={{ width: "55%", height: "65%", backgroundColor: "#0056b3", color: "white", margin: "0 20%" }}
          >
            Remove from favourites
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Favourites;
