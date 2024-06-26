import React from "react";
import "./MainPage.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import hypeImage from "./Photos/logoAndName.png";
import house1 from "./Photos/house1.png";
import house2 from "./Photos/house2.png";
import house3 from "./Photos/house3.png";
import house4 from "./Photos/house4.png";
import profilePic from "./Photos/profileLogo.png";
import favourites from "./Photos/favourites.png";
import help from "./Photos/help_icon.png";
import HouseCard from "./HouseCard";
import TypingAnimation from "./TypingAnimation.js";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jackImage from "./Photos/profile2.jpg";

function MainPage() {
  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();
  const navigateToPage = (url) => {
    window.location.href = url;
  };
  const handleFavourites = () => {
    navigate("/favourites", { state: { user } });
  }
  const handleProfile = () => {
    navigate("/profile", { state: { user } });
  }
  const handleLogin = () => {
    navigate("/login", { state: { user: "" } });
  }

  const handleSearch = () => {
    navigate("/search", { state: { user} });
  }
  const handleHouseNav = (num) => {
    console.log("House Number:", num);
    navigate("/details", { state: { user , id: num} });
  }


  const textForAnimation = "Find Your Dream Home Today!";
  console.log("User:", user);
  return (
    <div className="flex-column d-flex vw-100 vh-100 " style={{ background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
      <div className="d-flex flex-row justify-content-end w-100 " style={{ height: "14%" }}>
        <div className=" d-felx flex-column justify-content-center  pe-3"style={{fontFamily:"Lucida Console"}}>
          <div style={{transform: "translateX(-5px)"}}>
            {(user === ""||(user === undefined)) ? "Login" : "Profile"}
          </div>
          <div
            onClick={((user === "") ||(user === undefined)) ? handleLogin : handleProfile}
            style={{
              cursor: "pointer",
              marginLeft: "1px",
              marginBottom: "40px",
              padding: "20px",
              width: "75px",
              height: "75px",
              backgroundImage: `url(${(user === "Jack") ? jackImage : profilePic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: (user==="Jack") ? "translateX(-8px)" :"translateX(-18px)",
              borderRadius: "50%", // Add this line to make the image circle
              border: (user === "Jack") ? "3px solid black" : "none",
            }}
          ></div>
        </div>
        <div className=" d-felx flex-column me-4" style={{fontFamily:"Lucida Console"}}>
          Favourites
          <div
            onClick={((user === "") ||(user === undefined)) ? handleLogin : handleFavourites}
            style={{
              cursor: "pointer",
              marginLeft: "1px",
              padding: "20px",
              width: (user === "Jack") ? "75px" : "75px",
              height: (user === "Jack") ? "80px" : "75px",
              backgroundImage: `url(${favourites})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "translateX(10px)",
            }}
          ></div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center w-100" style={{ height: "33%" }}>
        <div className=" d-flex flex-column justify-content-center h-100 ps-5" style={{ width: "40%" }}>
          <img src={hypeImage} className="img-fluid img-thumbnail rounded-circle" style={{ width: "200px", height: "200px", transform: "translateY(-35px)" }}></img>
        </div>
        <div className=" d-flex flex-column align-content-start h-100 mt-5" style={{ width: "60%" }}>
          <div style={{ fontWeight: "bolder", transform: "translateX(-155px)" }}>
            {" "}
            <TypingAnimation text={textForAnimation} typingSpeed={50} fontSize={38} fontFamily={"Lucida Console"} colorOfText={"#000000"}></TypingAnimation>
          </div>
          <div className="ps-5">
            <Button onClick={()=>handleSearch()}style={{ width: "200px", color: "white", backgroundColor:"#0056b3"}}>Search</Button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-evenly h-50  " style={{ width: "99.8%" }}>
        <div className=" h-100 d-flex flex-row justify-content-center " onClick={() => handleHouseNav(2)} style={{ width: "20%" }}>
          <HouseCard
            Name="8085 19th Ave SW"
            Photo="./Photos/house2.png"
            Price="200,000"
            Description="This is a beautiful house in a great neighborhood.  It has a large backyard and a one car garage."
            NumBath={2}
            NumBed={2}
          />
        </div>
        <div className=" h-100 d-flex flex-row justify-content-center " onClick={() => handleHouseNav(3)} style={{ width: "20%" }}>
          <HouseCard
            Name="2024 44th Ave NW"
            Photo=  "./Photos/house3.png"
            Price="300,000"
            Description="This is a beautiful house in a great neighborhood.  It has a large backyard and a two car garage."
            NumBath={2}
            NumBed={3}
          />
        </div>
        <div className=" h-100 d-flex flex-row justify-content-center " onClick={() => handleHouseNav(4)} style={{ width: "20%" }}>
          <HouseCard
            Name="10325 Bonaventure Dr SE"
            Photo="./Photos/house4.png"
            Price="400,000"
            Description="This is a beautiful house in a great neighborhood. It has a large backyard and a two car garage."
            NumBath={2}
            NumBed={3}

          />
        </div>
        <div className=" h-100 d-flex flex-row justify-content-center " onClick={() => handleHouseNav(5)} style={{ width: "20%" }}>
          <HouseCard
            Name="1236 12 Ave SW"
            Photo="./Photos/house4.png"
            Price="600,000"
            Description="This is a beautiful house in a great neighborhood.  It has a large backyard and a two car garage."
            NumBath={4}
            NumBed={5}

          />
        </div>
        <div className=" h-100 d-flex flex-row justify-content-center " onClick={() => handleHouseNav(6)}style={{ width: "20%" }}>
          <HouseCard
            Name="1126 Memorial Dr NW"
            Photo="./Photos/house4.png"
            Price="700,000"
            Description="This is a beautiful house in a great neighborhood.  It has a large backyard and a two car garage."
            NumBath={2}
            NumBed={3}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
