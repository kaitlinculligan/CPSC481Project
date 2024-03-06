import React from 'react';
import "./NavBar.css";
import hypeImage from "./pages/Photos/hype.png"
import logoAndTitle from "./pages/Photos/logoAndName.png"
import favourites from "./pages/Photos/favourites.png";
import profilePic from "./pages/Photos/homePage.png";
import help from "./pages/Photos/help_icon.png";
import backArrow from "./pages/Photos/backArrow.png";
const NavBar = () => {
  return (
<div>
      <header>
        <div className="back">
          <img src={backArrow} alt="Back" />
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