import React from 'react';
import "./NavBar.css";
import hypeImage from "./Photos/hype.png"
import logoAndTitle from "./Photos/logoAndName.png"
import favourites from "./Photos/favourites.png";
import profilePic from "./Photos/profileLogo.png";
import home from "./Photos/homePage.png";
import backArrow from "./Photos/backArrow.png";
import searchIcon from "./Photos/searchIcon.png";
import jackPic from "./Photos/profile2.jpg";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const NavBar = () => {
  const location = useLocation();
  var user = location.state?.user;
  var houseInfo = location.state?.houseInfo;
  const navigate = useNavigate();
  const navigateToPage = (url) => {
    // This will reload the page and navigate to the new URL.
    window.location.href = url;
  };
  const handleHome=()=>{
    navigate('/', { state: { user,houseInfo } });
  }
  const handleFavourites=()=>{
    if(user === undefined || user === ""){
      navigate('/login', { state: { user,houseInfo } });
    }
    else{
    navigate('/favourites', { state: { user,houseInfo } });
    }
  }
  const handleBack=()=>{
    navigate(-1, { state: { user,houseInfo} });
  }
  const handleProfile=()=>{
    if(user === undefined || user === ""){
      console.log("User:", user);
      navigate('/login', { state: { user,houseInfo } });
    }
    else{
      navigate('/profile', { state: { user,houseInfo } });
    }

  }

  const handleSearch=()=>{
    navigate('/results', { state: { user,houseInfo } });
  }

  return (
    <div>
      <header>
        <div className="back">
          <img src={backArrow} onClick={handleBack} alt="Back" />
        </div>
        <div className="logo">
          <img style={{cursor: "pointer", borderRadius: "50%"}} src={logoAndTitle} onClick={handleHome} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <img src={searchIcon} onClick={handleSearch} style={{width:"45px",height:"45px",borderColor:"black", cursor:"pointer", borderRadius: "50%" }} alt="Search" />
            </li>
            <li>
              <img src={user === "Jack" ? jackPic : profilePic} onClick={handleProfile} style={{width:"50px",height:"50px",borderColor:"black", cursor:"pointer", borderRadius: "50%", border: user === "Jack" ? "3px solid black" : "none" }} alt="Profile" />
            </li>
            <li>
              <img src={favourites} onClick={handleFavourites} style={{width:"50px",height:"50px",borderColor:"black", cursor:"Pointer", borderRadius: "50%" }} alt="Favourites" />
            </li>
            <li>
              <img src={home} onClick={handleHome} style={{width:"50px",height:"50px",borderColor:"black", cursor:"pointer", borderRadius: "50%" }} alt="Help" />
            </li>
          </ul>
        </nav>
      </header>
      <div className="border-line"></div>
    </div>
  );
};

export default NavBar;