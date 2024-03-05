import "./Filters.css"
import profilePic from "./Photos/profileLogo.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import hypeImage from "./Photos/hype.png"
import backArrow from "./Photos/backArrow.png"
import homeButton from "./Photos/homePage.png"

function Filters() {
	return(
		<div>
			<div className='row'>
			<div className='col'>
			<Navbar expand="lg" >
      			<Container>
        			<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home"><img src={backArrow} style={{width:"50px",height:"50px",borderColor:"black" }}></img></Nav.Link>
					</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
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