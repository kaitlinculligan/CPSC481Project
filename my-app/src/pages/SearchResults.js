import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchResults.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import favourites from "./Photos/favourites.png";
import profilePic from "./Photos/homePage.png";
import hypeImage from "./Photos/hype.png"

function SearchResults() {
	return(
		<div style={{backgroundColor:"#10a690"}}>
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
			<Card style={{ width: '35%',paddingTop:"5px" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
				</Card>
				<Card style={{ width: '35%',paddingTop:"5px" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
				</Card>
		</div>
	)
}

export default SearchResults;