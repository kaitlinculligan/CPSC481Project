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
import { Carousel } from "react-bootstrap";
import houseInfo from "./houseinfo.json";
import HouseCard from "./HouseCard.js";
import house1 from "./Photos/house1.png";
import { useMemo } from "react";
import house2 from "./Photos/house2.png";

function ProfilePage() {
  const [show, setShow] = useState(false); // State to control the visibility of the modal
  const [email, setEmail] = useState(""); // Assuming you want to edit the email, for example
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("1");
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
    if (user === undefined || user === "") {
      navigateToPage("./login");
    } else if (user === "Jack") {
      setEmail("JackH88@gmail.com");
      setPhone("403-787-9987");
    }
  }, [user]);
  useEffect(() => {
    console.log("Updated Email:", email);
  }, [email]);
  console.log("User:", user);

  // Function to handle form submission for profile updates
  const handleSaveChanges = () => {
    handleClose();
  };
  const handleLogout = () => {
    navigate("/login", { state: { user: "" } });
  };
  const filteredHouseIds = useMemo(() => houseInfo.filter((house) => house.jackBooking === "yes").map((house) => house.id), [houseInfo]);

  const handleSelect = (selectedIndex, e) => {
    const selectedId = filteredHouseIds[selectedIndex];
    setId(selectedId);
  };
  const handleClickedHouse= (num) => {
    console.log("WHATTTT");
    navigate("/details", { state: { user , id: num} });
  }

  console.log(
    "House Beds:",
    houseInfo.map((house) => house.bedrooms)
  );
  console.log(
    "House Baths:",
    houseInfo.map((house) => house.bathrooms)
  );
  console.log(
    "House images:",
    houseInfo.map((house) => house.image)
  );
  console.log("house1:", house1);
  if(id === ""){setId("1")}
  if(id === undefined){setId("1")}
  let booking = houseInfo.filter((house) => house.id === id).map((house) => house.timeOfBooking);
  let time, date;
  if (booking.length > 0) {
    let dateNtime = booking[0].split("T");
    date = dateNtime[0];
    time = dateNtime[1];
  }
  console.log("Date:", date, "Time:", time);
  if (date === "NA" || date === undefined || date === "") {
    date = "2023-08-20";
    time = "3:15 PM"
  }
  console.log("Booking:", booking);
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
              <span className=" py-2">{user === "Jack" ? `Phone: ${phone}` : "Phone: 403-787-9987"}</span>
              <Button onClick={handleShow} className="w-50 mx-auto my-2" style={{ height: "50px", backgroundColor: "#0056b3" }}>
                Edit Profile
              </Button>
              <Button onClick={handleLogout} className="w-50 mx-auto my-2" style={{ height: "50px", backgroundColor: "#0056b3" }}>
                Logout
              </Button>
            </div>
          </div>
        </div>
        <div className="w-75 d-flex flex-column align-items-center pt-5">
          <Card className="p-5 rounded-3 w-75">
            <h1>Current House Bookings</h1>
            <div className="h-auto border-5 border-black border bg-black rounded-2 p-2 mt-5 d-flex flex-column align-items-center  " style={{ minHeight: "100px" }}>
              {user === "Jack" ? (
                <>
                  <div className="h-25 w-100 d-flex flex-row justify-content-center" style={{ color: "white" }}>
                    <div style={{fontWeight:"bold", fontSize:"20px"}}>BOOKING TIME: {date} at {time} </div> 
                  </div>
                  <Carousel className="w-50" onSelect={handleSelect}>
                    {houseInfo
                      .filter((house) => house.jackBooking === "yes")
                      .map((house, index) => (
                        <Carousel.Item key={house.id} onClick={() => {
                          handleClickedHouse(house.id);
                        }}>
                          <HouseCard
                            Name={house.houseName}
                            Photo={house.image}
                            Price={house.price}
                            NumBath={house.bathrooms}
                            Description={house.description}
                            NumBed={house.bedrooms}
                          
                          />
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </>
              ) : (
                <div style={{ color: "#FFFFFF" }}>"There are no current house bookings."</div>
              )}
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