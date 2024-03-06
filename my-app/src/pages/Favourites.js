import React from 'react';
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import hypeImage from "./Photos/hype.png";
import NavBar from './NavBar.js';

function Favourites() {

  const navigateToPage = (url) => {
    // This will reload the page and navigate to the new URL.
    window.location.href = url;
  };


  //list of favorites
  const favoriteListings = [
    { id: 1, address: 'Address 1', price: 'Price 1' },
    { id: 2, address: 'Address 2', price: 'Price 2' },
    // ... other favorites
  ];

  return (
    <div style={{height:"700px", backgroundColor:"#10a690"}}>
      <NavBar/>
      <div className="row" style={{height:"25px", width:"100px", paddingLeft:"45px"}}>
        <h1>Favourites</h1>
      </div>
      <br></br>
      <br></br>

      {/* Buttons Row */}
          <div className="row justify-content-center" style={{height:"50px"}}>
      {/* Home Button */}
        <div className="col-auto">
          <button onClick={() => navigateToPage('./')}>Home</button>
        </div>

      {/* Search Listings Button */}
        <div className="col-auto">
          <button onClick={() => navigateToPage('./search')}>Search Listings</button>
        </div>

      {/* Advanced Filter Button */}
        <div className="col-auto">
          <button onClick={() => navigateToPage('./filters')}>Advanced Filter + </button>
        </div>
      </div>

      {/* Favorites Listings */}
      {favoriteListings.map((listing) => (
        <div key={listing.id} className="row justify-content-center" style={{ margin: "10px 0", padding: "50px", backgroundColor: "white", border: "2px solid black" }}>
          <div className="col" style={{ display: "flex", alignItems: "center" }}>
            {/* Image on the left side */}
            <div style={{ marginRight: "10px" }}>
              <img src={hypeImage} style={{ width: '150px', height: 'auto' }} alt="Property" />
            </div>
            {/* Details and Remove button on the right side */}
            <div style={{ marginLeft: "100px", flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2>{listing.address}</h2>
                <p>{listing.price}</p>
              </div>
              <button style={{width:"100px", height:"50px", backgroundColor:"red" }}>Delete</button>
            </div>
          </div>
        </div>
      ))}

      <div className='row justify-content-center'>
        <div className='col'></div>
        <div className='col-2'>
          <button style={{width:"200px"}}>View More Favourites</button>
        </div>
        <div className='col-5'></div>
      </div>
    </div>
  );
}

export default Favourites;
