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
import NavBar from './NavBar.js';

function SearchPage() {
	return <div style={{height:"700px",background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
	<NavBar/>
	<br></br>
	<br></br>
	<div className="row w-100 px-2 flex-column d-flex align-items-center py-2 justify-content-start" style={{height:"25px",paddingLeft:"45px"}}>

		<div className='col justify-content-center'> <h1 style={{textAlign:"center"}}>Search</h1></div>

	</div>
	<br></br>
	<br></br>
	<div className='row justify-content-center' style={{padding:"5px"}} >
		<div className='col SearchBox' style={{height:"200px",maxWidth:"500px",border: '2px solid black',padding:"5px",backgroundColor:"#10a690", borderRadius:"10px"}} >
			<h2 style={{padding: "6px"}}><img src={dollarsign} className="img-fluid img-thumbnail rounded-circle" style={{width:"30px",height:"30px",borderColor:"black", margin: '6px'}}></img>Price</h2>
			<input type="text" style={{ margin: '10px' }} placeholder='Min' className='searchForm'></input>
			<input type="text" style={{ margin: '10px' }} placeholder='Max' className='searchForm'></input>
		</div>
		<div className='col' style={{maxWidth:"2px"}}></div>
		<div className='col' style={{height:"200px",maxWidth:"500px",border: '2px solid black',padding:"5px",backgroundColor:"#10a690", borderRadius:"10px"}} >
			<h2 style={{padding: "6px"}}><img src={pin} className="img-fluid img-thumbnail rounded-circle" style={{width:"30px",height:"30px",borderColor:"black", margin: '6px'}}></img>Location</h2>
			<input type="text" style={{ margin: '10px', padding: "11px"}} placeholder='Neighborhood' className='searchForm'></input>
		</div>
	</div>
	<div className='row justify-content-center' >
		<div className='col' style={{height:"200px",maxWidth:"500px",border: '2px solid black',padding:"5px",backgroundColor:"#10a690", borderRadius:"10px"}} >
			<div className='row'>
				<div className='col-3'>
					<h3>Property Type</h3>
					<select className='searchForm'>
						<option>Any</option>
					</select>
				</div>
				<div className='col'></div>
				<div className='col-3'>
				<h3># of Bed</h3>
				<select className='searchForm'>
					<option>Any</option>
				</select>
				</div>
				<div className='col'></div>
				<div className='col-3'>
				<h3># of Bath</h3>
				<select className='searchForm'>
					<option>Any</option>
				</select>
				</div>
			</div>
		</div>
		<div className='col' style={{maxWidth:"2px"}}></div>
		<div className='col' style={{height:"200px",maxWidth:"500px",border: '2px solid black',padding:"5px",backgroundColor:"#10a690", borderRadius:"10px"}} >
			<h2>Advanced Filters</h2>
			<button className='searchForm'>+</button>
		</div>
	</div>
	<div className='row justify-content-center'>
	<div className='col'></div>
	<div className='col-2'>
		<input type="submit" value="Search"classname=' searchButton w-100 px-2 flex-column d-flex align-items-center py-2 justify-content-start' style={{width:"200px",padding:"14px 20px", backgroundColor:'#04AA6d',color:'white',margin:'8px 0', border:'none',borderRadius:'4px'}}></input>
		</div>
		<div className='col-5'></div>
	</div>

  </div>
  }

  export default SearchPage;