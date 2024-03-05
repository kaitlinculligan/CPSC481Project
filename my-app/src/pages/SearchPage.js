import './SearchPage.css';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import hypeImage from "./Photos/hype.png";
import dollarsign from "./Photos/dollarsignpng.png";
import pin from "./Photos/locationPin.png";
import favourites from "./Photos/favourites.png";
import profilePic from "./Photos/homePage.png";

function SearchPage() {
	return <div style={{height:"700px"}}>
	<div className="row" style={{height:"50px", width:"150px"}}>
	<Navbar expand="lg" className="bg-body-tertiary">
      			<Container>
        			<Navbar.Brand href="#home"> <img src={hypeImage} style={{width:"50px",height:"50px",borderColor:"black" }}></img></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
        			<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home"><img src={profilePic} style={{width:"50px",height:"50px",borderColor:"black" }}></img></Nav.Link>
						<Nav.Link href="#favourites"><img src={favourites} style={{width:"50px",height:"50px",borderColor:"black" }}></img></Nav.Link>

					</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
	</div>
	<div className="row" style={{height:"25px",paddingLeft:"45px"}}>
		<div className='col'></div>
		<div className='col'> <h1 style={{textAlign:"center"}}>Search</h1></div>
		<div className='col'></div>
	</div>
	<br></br>
	<br></br>
	<div className='row justify-content-center' style={{padding:"5px"}} >
		<div className='col' style={{height:"200px",maxWidth:"500px",border: '2px solid black',padding:"5px",backgroundColor:"#10a690"}} >
		<img src={dollarsign} className="img-fluid img-thumbnail rounded-circle" style={{width:"20px",height:"20px",borderColor:"black" }}></img>
			<h2>Price</h2>
			<input type="text" placeholder='Min'></input>
			<input type="text" placeholder='Max'></input>
		</div>
		<div className='col' style={{maxWidth:"2px"}}></div>
		<div className='col' style={{height:"200px",maxWidth:"500px",border: '2px solid black',padding:"5px",backgroundColor:"#10a690"}} >
		<img src={pin} className="img-fluid img-thumbnail rounded-circle" style={{width:"20px",height:"20px",borderColor:"black" }}></img>
			<h2>Location</h2>
			<input type="text" placeholder='Neighborhood'></input>
		</div>
	</div>
	<div className='row justify-content-center' >
		<div className='col' style={{height:"200px",maxWidth:"500px",border: '2px solid black',padding:"5px",backgroundColor:"#10a690"}} >
			<div className='row'>
				<div className='col-3'>
					<h3>Property Type</h3>
					<select>
						<option>Any</option>
					</select>
				</div>
				<div className='col'></div>
				<div className='col-3'>
				<h3># of Bed</h3>
				<select>
					<option>Any</option>
				</select>
				</div>
				<div className='col'></div>
				<div className='col-3'>
				<h3># of Bath</h3>
				<select>
					<option>Any</option>
				</select>
				</div>
			</div>
		</div>
		<div className='col' style={{maxWidth:"2px"}}></div>
		<div className='col' style={{height:"200px",maxWidth:"500px",border: '2px solid black',padding:"5px",backgroundColor:"#10a690"}} >
			<h2>Advanced Filters</h2>
			<button>+</button>
		</div>
	</div>
	<div className='row justify-content-center'>
	<div className='col'></div>
	<div className='col-2'>
		<button classname='searchButton' style={{width:"200px"}}>Search</button>
		</div>
		<div className='col-5'></div>
	</div>

  </div>
  }

  export default SearchPage;