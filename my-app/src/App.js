import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Homepage from './Homepage';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import hypeImage from "./Photos/hype.png";
import house1 from "./Photos/house1.png";
import house2 from "./Photos/house2.png";
import house3 from "./Photos/house3.png";
import house4 from "./Photos/house4.png";


function App() {
  return <div style={{height:"700px",backgroundColor:"#10a690"}}>      
  <div className="row" style={{height:"250px"}}>
    <div className="col p-5" style={{maxWidth:"250px",height:"400px"}} >
      <div className='row' style={{backgroundColor:"#3d94db",margin:"40px",padding: "20px",width:"100px",height:"100px",border: '10px solid black'}}>profile picture</div>
      <div className='row' style={{backgroundColor:"#3d94db",margin:"40px",padding: "20px",width:"100px",height:"100px",border: '10px solid black'}}>favourites</div>
    </div>
    <div className='col justify-content-center' ></div>
    <div className='col justify-content-right m-5' style={{height:"175px",maxWidth:"250px",backgroundColor:"#ba6856",border: '10px solid black'}} >
    <div className="d-flex flex-column align-items-stretch">
            <button type="button" className="btn btn-primary vertical-btn-group" style={{height:"52px"}}>Top</button>
            <button type="button" className="btn btn-secondary vertical-btn-group " style={{height:"52px"}}>Middle</button>
            <button type="button" className="btn btn-success vertical-btn-group" style={{height:"52px"}}>Bottom</button>
          </div>
    </div>
  </div>
  <div className='row justify-content-center p-2' >
  <img src={hypeImage} className="img-fluid img-thumbnail rounded-circle" style={{width:"250px",height:"250px",borderColor:"black" }}></img>
  </div>
  <div className='row justify-content-center pb-5' >
    <Button style={{width:"200px"}}>Test Button</Button>
  </div>
  <div className='row justify-content-center' >
    <div className='col-4 special' style={{maxWidth:"375px",height:"250px",backgroundColor:"#ba6856",border: '10px solid black',backgroundImage: `url(${house1})`, backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',}} >
      
    </div>
    <div className='col-4' style={{maxWidth:"375px",height:"250px",backgroundColor:"#ba6856",border: '10px solid black',backgroundImage: `url(${house2})`, backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}} >
      house 2
    </div>
    <div className='col-4' style={{maxWidth:"375px",height:"250px",backgroundColor:"#ba6856",border: '10px solid black',backgroundImage: `url(${house3})`, backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}} >
      house 3
    </div>
    <div className='col-4' style={{maxWidth:"375px",height:"250px",backgroundColor:"#ba6856",border: '10px solid black',backgroundImage: `url(${house4})`, backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}} >
      house 4
    </div>
  </div>

</div>
}

export default App;
