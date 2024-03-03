import './MainPage.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import hypeImage from "./Photos/hype.png";
import dollarsign from "./Photos/dollarsignpng.png";
import pin from "./Photos/locationPin.png";

function SearchPage() {
	return <div style={{height:"700px",backgroundColor:"#10a690"}}>
	<div className="row" style={{height:"50px", width:"150px"}}>
	<button>Home</button>
	</div>
	<div className="row" style={{height:"25px", width:"100px",paddingLeft:"45px"}}>
	<h1>Search</h1>
	</div>
	<br></br>
	<br></br>
	<div className='row justify-content-center' style={{padding:"5px"}} >
		<div className='col' style={{height:"200px",maxWidth:"500px",backgroundColor:"#ba6856",border: '2px solid black',padding:"5px"}} >
		<img src={dollarsign} className="img-fluid img-thumbnail rounded-circle" style={{width:"20px",height:"20px",borderColor:"black" }}></img>
			<h2>Price</h2>
			<input type="text" placeholder='Min'></input>
			<input type="text" placeholder='Max'></input>
		</div>
		<div className='col' style={{maxWidth:"2px"}}></div>
		<div className='col' style={{height:"200px",maxWidth:"500px",backgroundColor:"#ba6856",border: '2px solid black',padding:"5px"}} >
		<img src={pin} className="img-fluid img-thumbnail rounded-circle" style={{width:"20px",height:"20px",borderColor:"black" }}></img>
			<h2>Location</h2>
			<input type="text" placeholder='Neighborhood'></input>
		</div>
	</div>
	<div className='row justify-content-center' >
		<div className='col' style={{height:"200px",maxWidth:"500px",backgroundColor:"#ba6856",border: '2px solid black',padding:"5px"}} >
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
		<div className='col' style={{height:"200px",maxWidth:"500px",backgroundColor:"#ba6856",border: '2px solid black',padding:"5px"}} >
			<h2>Advanced Filters</h2>
			<button>+</button>
		</div>
	</div>
	<div className='row justify-content-center'>
	<div className='col'></div>
	<div className='col-2'>
		<button style={{width:"200px"}}>Enter</button>
		</div>
		<div className='col-5'></div>
	</div>

  </div>
  }

  export default SearchPage;