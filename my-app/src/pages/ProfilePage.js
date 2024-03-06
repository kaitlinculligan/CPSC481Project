import profilePic from "./Photos/profileLogo.png";
import homePic from "./Photos/homePage.png";
import hypeImage from "./Photos/hype.png";
import favourites from "./Photos/favourites.png";
import { Button, Card } from "react-bootstrap";
import NavBar from './NavBar.js';

function ProfilePage() {
  const navigateToPage = (url) => {
    // This will reload the page and navigate to the new URL.
    window.location.href = url;
  };

  return (
    <div>
      <NavBar/>
      <div className="flex-row d-flex vw-100 vh-100" style={{ background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
        <div className="w-25 d-flex flex-column justify-content-between">
          <div className=" h-100">

            <div className="w-100 px-2 flex-column d-flex align-items-center py-2 justify-content-start">
              <img src={profilePic} className="img-fluid" style={{ width: "200px", height: "200px", objectFit: "contain" }} alt="description"></img>
              <h1>Mr. User</h1>
              <span>Email: UserEmail1@gmail.com</span>
              <span>Phone: 123-456-7890</span>
            </div>
            <Button className="ms-3 w-50 mx-auto" style={{ height: "50px", backgroundColor: "#10a690" }}>Edit Profile</Button>
          </div>
        </div>
        <div className="w-75 flex-column d-flex align-items-center pt-5">
          <Card className="p-5 rounded-3">
          <h1>Current House Bookings</h1>
          <div className="h-auto border-5 border-black border rounded-2 p-2 mt-5" style={{ minHeight: "100px" }}>
            There are no current house bookings.
          </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
