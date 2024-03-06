import React from 'react';
import profilePic from "./Photos/homePage.png";
import hypeImage from "./Photos/hype.png";
import NavBar from './NavBar.js';

function LoginPage() {
    const navigateToPage = (url) => {
        window.location.href = url;
      };

return <div className='col justify-conent-center' style={{ height: '100vh', width: '100vw' }}>
    <NavBar />
    <img src={hypeImage} alt="Background Image" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: 0.1 }} />

    <div className='row justify-content-center text-center' style={{marginBottom:"25px"}}><h1 style={{ fontSize: '4.2em' }}>Calgary Homes</h1></div>
    <div className='row justify-content-center'>
        <div className='col-4' >
            <div className='row justify-content-center'style={{marginBottom:"10px"}}>
                <p1 style={{ fontSize: '2.2em' }}>Login</p1>
            </div>
            <div className='row justify-content-center'>
                <form >
                    <div className='form-group' style={{ marginBottom: "10px" }}>
                        <label htmlFor='exampleInputEmail1'>Email address</label>
                        <input type='email' className='form-control' id='exampleInputEmail1' style={{border:"3px solid grey"}}/>
                    </div>
                    <div className='form-group' style={{ marginBottom: "25px" }}>
                        <label htmlFor='exampleInputPassword1'>Password</label>
                        <input type='password' className='form-control' id='exampleInputPassword1'style={{border:"3px solid grey"}} />
                    </div>
                    <div className="felx-row d-flex justify-content-evenly ">
                    <button type='submit' className='btn btn-primary w-25' style={{ backgroundColor: "#10a690" }}>Login</button>
                    <button type='submit' className='btn btn-primary w-25' style={{ backgroundColor: "#10a690" }}>Register</button>
                    <p1 style={{ cursor: "pointer", textDecoration: 'underline', color: 'blue' }}>Forgot Password?</p1>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>;
}
export default LoginPage;