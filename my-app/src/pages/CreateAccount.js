import React from "react";
import profilePic from "./Photos/homePage.png";
import hypeImage from "./Photos/hype.png";
import NavBar from "./NavBar.js";

function CreatePage() {
  const navigateToPage = (url) => {
    window.location.href = url;
  };

  return (
    <div className="col justify-conent-center" style={{ height: "100vh", width: "100vw" }}>
      <NavBar />
      <img
        src={hypeImage}
        alt="Background Image"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1, opacity: 0.1 }}
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
            <form>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" style={{ border: "3px solid grey" }} />
              </div>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="exampleInputEmail1">Confirm Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" style={{ border: "3px solid grey" }} />
              </div>
              <div className="form-group" style={{ marginBottom: "25px" }}>
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" style={{ border: "3px solid grey" }} />
              </div>
              {/* first name and last name text boxes */}
              <div className="form-group w-100 row" style={{ marginBottom: "10px" }}>
                <div className="w-50">
                  <label htmlFor="exampleInputEmail1">First Name</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" style={{ border: "3px solid grey" }} />
                </div>
                <div className="w-50">
                  <label htmlFor="exampleInputEmail1">Last Name</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" style={{ border: "3px solid grey" }} />
                </div>
              </div>
              <div className="form-group w-100 row  " style={{ marginBottom: "30px" }}>
                <label htmlFor="exampleInputEmail1">Phone Number</label>
                <div style={{ width: "30%" }}>
                  <input type="text" className="form-control" id="exampleInputEmail1" style={{ border: "3px solid grey" }} />
                </div>
                -
                <div style={{ width: "30%" }}>
                  <input type="text" className="form-control" id="exampleInputEmail1" style={{ border: "3px solid grey" }} />
                </div>
                -
                <div style={{ width: "30%" }}>
                  <input type="text" className="form-control" id="exampleInputEmail1" style={{ border: "3px solid grey" }} />
                </div>
              </div>
              <div className="felx-row d-flex justify-content-evenly ">
                <button type="submit" className="btn btn-primary w-50" style={{ backgroundColor: "#10a690" }}>
                  Create Account
                </button>
                <p1 style={{ cursor: "pointer", textDecoration: "underline", color: "blue" }}>Forgot Password?</p1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePage;
