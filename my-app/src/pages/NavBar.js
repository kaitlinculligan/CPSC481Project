import React from 'react';
import "./NavBar.css";
import hypeImage from "./Photos/hype.png"
import logoAndTitle from "./Photos/logoAndName.png"
import favourites from "./Photos/favourites.png";
import profilePic from "./Photos/homePage.png";
import help from "./Photos/help_icon.png";
import backArrow from "./Photos/backArrow.png";
const NavBar = () => {

  const navigateToPage = (url) => {
    // This will reload the page and navigate to the new URL.
    window.location.href = url;
  };

  return (
<div>
      <header>
        <div className="back">
          <img src={backArrow} onClick={() => navigateToPage('./')} alt="Back" />
        </div>
        <div className="logo">
          <img src={logoAndTitle} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
                <img src={profilePic} style={{width:"50px",height:"50px",borderColor:"black" }} alt="Profile" />
            </li>
            <li>
                <img src={favourites} style={{width:"50px",height:"50px",borderColor:"black" }} alt="Favourites" />
            </li>
            <li>
                <img src={help} style={{width:"50px",height:"50px",borderColor:"black" }} alt="Help" />
            </li>
          </ul>
        </nav>
      </header>
      <div className="border-line"></div>
    </div>
  );
};

export default NavBar;