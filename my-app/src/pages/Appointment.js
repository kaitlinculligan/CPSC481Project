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
import realtor from "./Photos/realtor.png";
import { Form } from "react-bootstrap";
import houseInfo from "./houseinfo.json";
import HouseCard from "./HouseCard.js";

const RealtorCard = ({ imageSrc, name, number, email }) => {
	return (
	  <div className="card" style={{ width: "18rem", textAlign: "center" }}>
		<img src={imageSrc} className="card-img-top pt-1" alt="Realtor" style={{ width: "100px", height: "100px", borderRadius: "50%", margin: "0 auto" }} />
		<div className="card-body">
		  <h5 className="card-title">{name}</h5>
		  <p className="card-text">{number}</p>
		  <p className="card-text">{email}</p>
		</div>
	  </div>
	);
  };

function Appointment() {

	const location = useLocation();
	const { user, id } = location.state || {id:2};
	let houseId = String(id);
	console.log("id:", id);
	const navigate = useNavigate();
	const [email, setEmail] = useState(""); // Assuming you want to edit the email, for example
  	const [phone, setPhone] = useState("");
	  const [date, setDate] = useState(""); // Assuming you want to edit the email, for example
  	const [time, setTime] = useState("");

	  const [propertyImages, setPropertyImages] = useState([]);
	  useEffect(() => {
		// Function to find the property by ID and set images
		const getPropertyImages = (houseId) => {
		  const property = houseInfo.find((property) => property.id === houseId);
		  if (property && property.photos) {
			// Dynamically require the images based on paths
			const loadedImages = property.photos
			  .map((photoPath) => {
				try {
				  return require(`${photoPath}`);
				} catch (err) {
				  console.error(`Failed to load image at ${photoPath}`, err);
				  return null;
				}
			  })
			  .filter((image) => image != null); // Filter out any nulls in case of errors

			setPropertyImages(loadedImages);
			console.log(propertyImages)
		  }
		};

		getPropertyImages(houseId);
	  }, [houseId]);

	  const [houseDetails, setHouseDetails] = useState({
		id:"",
		address: "",
		price: "",
		middleSchool: "",
		highSchool: "",
		elementarySchool: "",
		preSchool: "",
		pool: "NA",
		shopping: "",
		transportation: "",
		safety: "",
		squareFeet: "",
		bedrooms: 0,
		bathrooms: 0,
		noiseLevel: "",
		description: "",
		cleanliness: "",
		walkability: "",
		petFriendly: "",
		jackBooking:""
	  });
	  useEffect(() => {
		const getHouseDetails = (houseId) => {
			console.log("id at search:", houseId)
		  const property = houseInfo.find((property) => property.id === houseId);
		  if (property) {
			setHouseDetails({
				id: property.id||"",
			  address: property.houseName || "",
			  price: property.price || "",
			  middleSchool: property.schoolsMiddle || "",
			  highSchool: property.schoolsHighschool || "",
			  elementarySchool: property.schoolsElementary || "",
			  preSchool: property.schoolsPreschool || "",
			  pool: property.pool || "NA",
			  shopping: property.shopping || "",
			  transportation: property.transportation || "",
			  safety: property.safety || "",
			  squareFeet: property.sqft || "",
			  bedrooms: property.bedrooms || 0,
			  bathrooms: property.bathrooms || 0,
			  noiseLevel: property.noiseLevel || "",
			  description: property.description || "",
			  cleanliness: property.cleanliness || "",
			  walkability: property.walkability || "",
			  petFriendly: property.petFriendly || "",
			  jackBooking: property.jackBooking || "",
			});
		  }
		  console.log("House Details:", houseDetails);
		};

		getHouseDetails(houseId);
	  }, [houseId]);

	  useEffect(() => {
		if (user === "Jack") {
		  setEmail("JackH88@gmail.com");
		  setPhone("403-787-9987");
		}
		else{
			setEmail()
			setPhone()
		}
	  }, [user]);

	const navigateToPage = (url) => {
		window.location.href = url;
	  };
	  const handleSubmit = async () => {
	   if(houseDetails.jackBooking == 'yes'){
		alert("A booking for this house already exists")
	   }
	   else{
			var timePieces = time.split(":").map(Number)
			if(timePieces[0]>12){
				var hourAsInt = timePieces[0] -12
				var bookTime = date+"T"+hourAsInt+":"+timePieces[1]+" PM"
			}
			else{
				var bookTime = date+"T"+timePieces[0]+":"+timePieces[1]+" AM"
			}
			alert(id)
			alert(bookTime)
		try {
			const response = await fetch("http://localhost:5000/update-house-info", {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify({
				id: houseId,
				updates: {
					jackBooking: "yes",
					timeOfBooking: bookTime,
				},
			  }),
			});

			if (response.ok) {
			  console.log("Success:", await response.json());
			} else {
			  throw new Error("Failed to update Jack's favorite status.");
			}
		  } catch (error) {
			console.error("Error:", error);
		  }
	   }
    };


	return(
		<div>
			<NavBar/>
	<div classname="flex-row d-flex vw-100 vh-100" style={{background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
		<div className='row'>
		<div className="w-25 d-flex flex-column justify-content-between">
          <div className="h-100">
            <div className="w-100 px-2 flex-column d-flex align-items-center py-2 justify-content-start pt-5">
			<RealtorCard imageSrc={realtor} name="John Realtor" number="403-899-4547" email="JohnDoesHomes@gmail.com"></RealtorCard>
            </div>
          </div>
        </div>
			<div className='col'>
				<form onSubmit={handleSubmit}>
				<input className='appointmentRadio' id='inperson'type='radio'name='viewingType' value='inperson'></input>
					<label className='' for='inperson'>In-Person Viewing</label>
					<input className='appointmentRadio' id='virtual'type='radio'name='viewingType' value='virtual'></input>
					<label className='' for='virtual'>Virtual Viewing</label>
					<input className='appointmentForm' type='text' placeholder='Name' value={user}></input>
					<input className='appointmentForm' type='text' placeholder='Phone #'value={phone}></input>
					<input className='appointmentForm' type='text' placeholder='Email'value={email}></input>
					<input className='appointmentForm' type='date' onChange={(e) => setDate(e.target.value)} required></input>
					<input className='appointmentForm' type='time' min="09:00:00" max="19:00:00" onChange={(e) => setTime(e.target.value)} required></input>
					<button type='submit' className='appointmentSubmit'>Submit Request</button>
				</form>
			</div>
			<div className="w-25 d-flex flex-column justify-content-between">
          <div className="h-100">
            <div className="w-100 h-100 px-2 flex-column d-flex align-items-center py-2 justify-content-start">
			<h3 className=" py-3">Request viewing for:</h3>

              <HouseCard Name={houseDetails.address}

                          Price={houseDetails.price}
                          NumBath={houseDetails.bathrooms}
                          Description={houseDetails.description}
                          NumBed={houseDetails.bedrooms}/>
            </div>
          </div>
        </div>
		</div>
		</div>
	</div>
	)
}
export default Appointment;