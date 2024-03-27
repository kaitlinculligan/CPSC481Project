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

function MainPage() {
  const navigateToPage = (url) => {
    // This will reload the page and navigate to the new URL.
    window.location.href = url;
  };
  const textForAnimation = "Find Your Dream Home Today!";

  return (
    <div className="flex-column d-flex vw-100 vh-100 " style={{ background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
      <div className="d-flex flex-row justify-content-end w-100 " style={{ height: "14%" }}>
        <div className=" d-felx flex-column justify-content-center  pe-3"style={{fontFamily:"Lucida Console"}}>
          Login
          <div
            onClick={() => navigateToPage("./login")}
            style={{
              cursor: "pointer",
              marginLeft: "1px",
              marginBottom: "40px",
              padding: "20px",
              width: "85px",
              height: "85px",
              backgroundImage: `url(${profilePic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "translateX(-18px)",
            }}
          ></div>
        </div>
        <div className=" d-felx flex-column me-4" style={{fontFamily:"Lucida Console"}}>
          Favourites
          <div
            onClick={() => navigateToPage("./favourites")}
            style={{
              cursor: "pointer",
              marginLeft: "1px",
              padding: "20px",
              width: "75px",
              height: "80px",
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
            <Button style={{ width: "200px", backgroundColor: "green" }}>Search</Button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-evenly h-50  " style={{ width: "99.8%" }}>
        <div className=" h-100 d-flex flex-row justify-content-center " style={{ width: "20%" }}>
          <HouseCard
            Name="Brentwood Opporunity"
            Photo={house1}
            Price="$500,000"
            Description="A small but important property with a great view of the beltline"
            NumBath={3}
            NumBed={2}
          />
        </div>
        <div className=" h-100 d-flex flex-row justify-content-center " style={{ width: "20%" }}>
          <HouseCard
            Name="Brentwood Opporunity"
            Photo={house2}
            Price="$500,000"
            Description="A small but important property with a great view of the beltline"
            NumBath={3}
            NumBed={2}
          />
        </div>
        <div className=" h-100 d-flex flex-row justify-content-center " style={{ width: "20%" }}>
          <HouseCard
            Name="Brentwood Opporunity"
            Photo={house3}
            Price="$500,000"
            Description="A small but important property with a great view of the beltline"
            NumBath={3}
            NumBed={2}
          />
        </div>
        <div className=" h-100 d-flex flex-row justify-content-center " style={{ width: "20%" }}>
          <HouseCard
            Name="Brentwood Opporunity"
            Photo={house4}
            Price="$500,000"
            Description="A small but important property with a great view of the beltline"
            NumBath={3}
            NumBed={2}
          />
        </div>
        <div className=" h-100 d-flex flex-row justify-content-center " style={{ width: "20%" }}>
          <HouseCard
            Name="Brentwood Opporunity"
            Photo={house1}
            Price="$500,000"
            Description="A small but important property with a great view of the beltline"
            NumBath={3}
            NumBed={2}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
