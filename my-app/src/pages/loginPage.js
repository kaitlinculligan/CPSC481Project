import React from 'react';
import profilePic from "./Photos/homePage.png";
import hypeImage from "./Photos/hype.png";
import NavBar from './NavBar.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    var houseInfo = location.state?.houseInfo;
    var user = location.state?.user;
      // State variables to store the email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle the email input change
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleCreateAccount = () => {
        navigate("/create",{undefined,houseInfo});
    }

    // Function to handle the password input change
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    // Function to handle the forgotten password
    const handleForgotPassword = (event) => {
        alert('This functionality is under development');
    }

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Here you can use the email and password variables
        console.log('Email:', email, 'Password:', password);
        if(email === '' || password === '') {
            alert('Please enter both email and password');
            return;
        }
        if(email === "JackH88@gmail.com" && password === "password") {
            alert('Login successful');
            navigate('/profile', { state: { user: 'Jack',houseInfo } });
        }
        else {
            alert('Incorrect email or password');
        }

    }

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
                        <input type='email' className='form-control' id='exampleInputEmail1' style={{border:"3px solid grey"}}
                        value={email}
                        onChange={handleEmailChange}/>
                    </div>
                    <div className='form-group' style={{ marginBottom: "25px" }}>
                        <label htmlFor='exampleInputPassword1'>Password</label>
                        <input type='password' className='form-control' id='exampleInputPassword1'style={{border:"3px solid grey"}}value={password}
                        onChange={handlePasswordChange} />
                    </div>
                    <div className="felx-row d-flex justify-content-evenly ">
                    <button type='submit' className='btn btn-primary w-25' style={{ backgroundColor: "#0056b3" }} onClick={handleSubmit}>Login</button>
                    <button onClick={handleCreateAccount} type='submit' className='btn btn-primary w-25' style={{ backgroundColor: "#0056b3" }}>Create </button>
                    <p1 onClick={handleForgotPassword} style={{ cursor: "pointer", textDecoration: 'underline', color: 'blue' }}>Forgot Password?</p1>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>;
}
export default LoginPage;