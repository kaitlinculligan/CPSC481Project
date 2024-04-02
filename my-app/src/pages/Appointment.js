import './Appointment.css';
import profilePic from "./Photos/profileLogo.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import hypeImage from "./Photos/hype.png"
import backArrow from "./Photos/backArrow.png"
import homeButton from "./Photos/homePage.png"
import emailIcon from "./Photos/emailLogopng.png"
import phoneIcon from "./Photos/phoneLogo.png"
import house1 from "./Photos/house1.png"
import NavBar from './NavBar.js';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import profilepic1 from "./Photos/profileLogo.png";
import { Form } from "react-bootstrap";
import houseInfo from "./houseinfo.json";
import HouseCard from "./HouseCard.js";

function Appointment() {

	const location = useLocation();
	const user = location.state?.user;
	const house = location.state?.house;
	const navigate = useNavigate();
	const [email, setEmail] = useState(""); // Assuming you want to edit the email, for example
  	const [phone, setPhone] = useState("");

	  useEffect(() => {
		if (user === "Jack") {
		  setEmail("JackH88@gmail.com");
		  setPhone("403-787-9987");
		}
	  }, [user]);

	const navigateToPage = (url) => {
		window.location.href = url;
	  };
	  const handleSubmit = (event) => {
       alert("Form submitted")
	   navigate("/", { state: { user} });
    }


	return(
		<div>
			<NavBar/>
	<div classname="flex-row d-flex vw-100 vh-100" style={{background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
		<div className='row'>
		<div className="w-25 d-flex flex-column justify-content-between">
          <div className="h-100">
            <div className="w-100 px-2 flex-column d-flex align-items-center py-2 justify-content-start">
              <img
                src={ profilepic1}
                className="img-fluid rounded-circle pt-2"
                alt="Profile"
                style={{ width: "200px", height: "200px", objectFit: "contain" }}
              ></img>
              <h1 className=" py-3">Jill Realtor</h1>
              <span className=" py-1">Email: JillRealtor@CalgaryHomes.com</span>
              <span className=" py-2">Phone: 403-787-9987</span>
            </div>
          </div>
        </div>
			<div className='col'>
				<form>
				<input className='appointmentRadio' id='inperson'type='radio'name='viewingType' value='inperson'></input>
					<label className='' for='inperson'>In-Person Viewing</label>
					<input className='appointmentRadio' id='virtual'type='radio'name='viewingType' value='virtual'></input>
					<label className='' for='virtual'>Virtual Viewing</label>
					<input className='appointmentForm' type='text' placeholder='Name' value={user}></input>
					<input className='appointmentForm' type='text' placeholder='Phone #'value={phone}></input>
					<input className='appointmentForm' type='text' placeholder='Email'value={email}></input>
					<input className='appointmentForm' type='date'></input>
					<input className='appointmentForm' type='time' min="09:00:00" max="19:00:00"></input>
					<button type='submit' className='appointmentSubmit' onClick={handleSubmit}>Submit Request</button>
				</form>
			</div>
			<div className="w-25 d-flex flex-column justify-content-between">
          <div className="h-100">
            <div className="w-100 h-100 px-2 flex-column d-flex align-items-center py-2 justify-content-start">
			<h3 className=" py-3">Request viewing for:</h3>
              <HouseCard Name={houseInfo.at(house).houseName}
                          Photo={houseInfo.at(house).photos[0]}
                          Price={houseInfo.at(house).price}
                          NumBath={houseInfo.at(house).bathrooms}
                          Description={houseInfo.at(house).description}
                          NumBed={houseInfo.at(house).bedrooms}/>
            </div>
          </div>
        </div>
		</div>
		</div>
	</div>
	)
}
export default Appointment;