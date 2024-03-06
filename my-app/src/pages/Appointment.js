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

function Appointment() {
	return(
	<div style={{background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
		<NavBar/>
		<div className='row'>
			<div className='col'>

			</div>
			<div className='col'>
				<h2>Contact Information</h2>
			</div>
			<div className='col'>
			<h3>Booking a showing for:</h3>
			<h3>123 Main Street</h3>
			</div>
		</div>
		<div className='row'>
			<div className='col'>
			<img src={profilePic} className='realtorInfo'></img>
			<h3 className='realtorName'>Realtor Name</h3>
			<p className='realtorName'>Info about the realtor here</p>
			<ul className='realtorName' >
				<li>realtorName@realtor.ca</li>
				<li>(403)-123-4567</li>
			</ul>
			</div>
			<div className='col'>
				<form>
					<input className='appointmentForm' type='text' placeholder='Name'></input>
					<input className='appointmentForm' type='text' placeholder='Phone #'></input>
					<input className='appointmentForm' type='text' placeholder='Email'></input>
					<input className='appointmentForm' type='datetime-local'></input>
					<input className='appointmentSubmit' type='submit'></input>

				</form>
			</div>
			<div className='col'>
			<img src={house1} style={{width:"50%",height:"50%"}}></img>
			</div>
		</div>

	</div>
	)
}
export default Appointment;