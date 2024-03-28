import profilePic from "./Photos/profileLogo.png";
import homePic from "./Photos/homePage.png";
import hypeImage from "./Photos/hype.png";
import favourites from "./Photos/favourites.png";
import profilepic1 from "./Photos/profileLogo.png";
import { Button, Card } from "react-bootstrap";
import NavBar from "./NavBar.js";
import { useLocation } from "react-router-dom";
import profilePic2 from "./Photos/profile2.jpg";
import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [show, setShow] = useState(false); // State to control the visibility of the modal
  const [email, setEmail] = useState(""); // Assuming you want to edit the email, for example
  const [phone, setPhone] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleProfilePicChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePic(URL.createObjectURL(event.target.files[0]));
    }
  };

  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();

  const navigateToPage = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    if (user === undefined) {
      navigateToPage("./login");
    } else if (user === "Jack") {
      setEmail("JackH88@gmail.com");
      setPhone("403-787-9987");
    }
  }, [user]);
  useEffect(() => {
    console.log("Updated Email:", email);
  }, [email]);

  // Function to handle form submission for profile updates
  const handleSaveChanges = () => {
    handleClose();
  };
  const handleLogout = () => {
    navigate("/login", { state: { user: "" } });
  };
  return (
    <div>
      <NavBar />
      <div className="flex-row d-flex vw-100 vh-100" style={{ background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
        <div className="w-25 d-flex flex-column justify-content-between">
          <div className="h-100">
            <div className="w-100 px-2 flex-column d-flex align-items-center py-2 justify-content-start">
              <img
                src={user === "Jack" ? profilePic2 : profilepic1}
                className="img-fluid rounded-circle pt-2"
                alt="Profile"
                style={{ width: "200px", height: "200px", objectFit: "contain" }}
              ></img>
              <h1 className=" py-3">{user === "Jack" ? "Jack Haden" : "Mr. User"}</h1>
              <span className=" py-1">{user === "Jack" ? `Email: ${email}` : "Email: UserEmail1@gmail.com"}</span>
              <span className=" py-2">{user === "Jack" ? `Email: ${phone}` : "Phone: 403-787-9987"}</span>
              <Button onClick={handleShow} className="w-50 mx-auto my-2" style={{ height: "50px", backgroundColor: "#10a690" }}>
                Edit Profile
              </Button>
              <Button onClick={handleLogout} className="w-50 mx-auto my-2" style={{ height: "50px", backgroundColor: "#10a690" }}>
                logout
              </Button>
            </div>
          </div>
        </div>
        <div className="w-75 flex-column d-flex align-items-center pt-5">
          <Card className="p-5 rounded-3 w-75">
            <h1>Current House Bookings</h1>
            <div className="h-auto border-5 border-black border rounded-2 p-2 mt-5" style={{ minHeight: "100px" }}>
              There are no current house bookings.
            </div>
          </Card>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formProfilePic" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" onChange={handleProfilePicChange} />
              {profilePic && <img src={profilePic} alt="Profile Preview" style={{ width: "100px", height: "100px", marginTop: "10px" }} />}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProfilePage;
