import React, { useState } from "react";
import NavBar from "./NavBar.js";
import hypeImage from "./Photos/hype.png";
import { useNavigate } from 'react-router-dom';

function CreatePage() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phonePart1, setPhonePart1] = useState("");
  const [phonePart2, setPhonePart2] = useState("");
  const [phonePart3, setPhonePart3] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const navigate = useNavigate();
  const navigateToPage = (url) => {
    window.location.href = url;
  };
  const isNumeric = /^\d+$/;

  const handleCreate = (e) => {
    e.preventDefault();
    setValidationMessage("");

    if (!email.includes("@")) {
      setValidationMessage("Please enter a valid email address.");
      return;
    }

    if (email !== confirmEmail) {
      setValidationMessage("Email and confirm email do not match.");
      return;
    }

    if (phonePart1.length !== 3 || phonePart2.length !== 3 || phonePart3.length !== 4) {
      setValidationMessage("Please enter a valid phone number.");
      return;
    }
    if(!isNumeric.test(phonePart1) || !isNumeric.test(phonePart2) || !isNumeric.test(phonePart3)){
      setValidationMessage("Please enter a valid phone number.");
      return;
    }
    alert("Account creation successful!");
    navigate( "/profile", { state: { user: firstName } });
  };

  return (
    <div className="col justify-content-center" style={{ height: "100vh", width: "100vw" }}>
      <NavBar />
      <img
        src={hypeImage}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.1,
        }}
      />
      <div className="row justify-content-center text-center" style={{ marginBottom: "25px" }}>
        <h1 style={{ fontSize: "4.2em" }}>Calgary Homes</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="row justify-content-center" style={{ marginBottom: "10px" }}>
            <p1 style={{ fontSize: "2.2em" }}>Create Account</p1>
          </div>
          <div className="row justify-content-center">
            <form onSubmit={handleCreate}>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: "3px solid grey" }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="confirmEmail">Confirm Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="confirmEmail"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  style={{ border: "3px solid grey" }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: "25px" }}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ border: "3px solid grey" }}
                />
              </div>
              <div className="form-group w-100 row" style={{ marginBottom: "10px" }}>
                <div className="col">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ border: "3px solid grey" }}
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{ border: "3px solid grey" }}
                  />
                </div>
              </div>
              <div className="form-group w-100 row" style={{ marginBottom: "30px" }}>
                <label htmlFor="phone">Phone Number</label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="phone1"
                    value={phonePart1}
                    onChange={(e) => setPhonePart1(e.target.value)}
                    style={{ border: "3px solid grey" }}
                  />
                </div>
                -
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="phone2"
                    value={phonePart2}
                    onChange={(e) => setPhonePart2(e.target.value)}
                    style={{ border: "3px solid grey" }}
                  />
                </div>
                -
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="phone3"
                    value={phonePart3}
                    onChange={(e) => setPhonePart3(e.target.value)}
                    style={{ border: "3px solid grey" }}
                  />
                </div>
              </div>
              {validationMessage && <div className="text-danger mb-3">{validationMessage}</div>}
              <div className="flex-row d-flex justify-content-evenly ">
                <button type="submit" className="btn btn-primary w-50" style={{ backgroundColor: "#0056b3" }}>
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;

