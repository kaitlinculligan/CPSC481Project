import "./Filters.css"
import profilePic from "./Photos/profileLogo.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import hypeImage from "./Photos/hype.png"
import backArrow from "./Photos/backArrow.png"
import homeButton from "./Photos/homePage.png"
import NavBar from './NavBar.js';

function Filters() {
	return(
		<div>
			<NavBar />
			<div className='row'>
			<div className='col'>
				
			</div>
		</div>
		<div className="row">
			<div className="col"></div>
			<div className="col">
				<h2>Add A Filter Value</h2>
			<form>
					<input className='filterForm' type='text' placeholder='Filter'></input>
					<input className='filterForm' type='text' placeholder='Value'></input>
					<input className='filterSubmit' type='submit' value="Add Filter"></input>

				</form>
			</div>
			<div className="col"></div>

		</div>
		</div>
	)
}

export default Filters