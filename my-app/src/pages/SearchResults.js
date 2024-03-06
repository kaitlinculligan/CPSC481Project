import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchResults.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Row, Col } from 'react-bootstrap';
import favourites from "./Photos/favourites.png";
import profilePic from "./Photos/homePage.png";
import hypeImage from "./Photos/hype.png"
import map from "./Photos/map.png"
import house1 from "./Photos/house1.png"
import house2 from "./Photos/house2.png"
import NavBar from './NavBar.js';


function SearchResults() {
	return(
		<div style={{backgroundColor:"#10a690"}}>
			<NavBar/>
			<Navbar expand="lg" className="bg-body-tertiary">
 
				<Container>
					<Nav className="justify-content-end" >
						<input type="text" placeholder='Search' ></input>
						<input type="text" placeholder='Filters' ></input>
					</Nav>
				</Container>
			</Navbar>
			<div className='row'>

			<div className='col'style={{paddingRight:"25px" }}>
				<div className='card'>
					<Card style={{ width: '100%',paddingTop:"10px" }}>
						<Card.Body>
							<Row>
							<Card.Title>123 Brookpark Ave.</Card.Title>
							</Row>
							<Row>
								<Col>
							<Card.Img variant="top" src={house1} />
							</Col>
							<Col>
							<Card.Text>
							<ul>
								<li>Price: $ 595,000</li>
								<li>Bedrooms: 3</li>
								<li>Bathrooms: 2</li>
							</ul>
							</Card.Text>
							</Col>
							</Row>
						</Card.Body>
						</Card>
				</div>
				<div className='card'>
					<Card  style={{ width: '100%',paddingTop:"10px" }}>
					<Card.Body>
					<Row>
						<Card.Title>481 Main Street</Card.Title>
						</Row>
						<Row>
							<Col>
						<Card.Img variant="top" src={house2} />
						</Col>
						<Col>
						<Card.Text>
						<ul>
							<li>Price: $ 534,000</li>
							<li>Bedrooms: 2</li>
							<li>Bathrooms: 1</li>
						</ul>
						</Card.Text>
						</Col>
						</Row>
					</Card.Body>
					</Card>
				</div>
				</div>
				<div className='col'>
				<img src={map} style={{ width: '100%',height:"100%" }}></img>
				</div>
				</div>
		</div>
	)
}

export default SearchResults;