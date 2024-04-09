import "./Appointment.css";
import NavBar from "./NavBar.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import realtor from "./Photos/realtor.png";
import HouseCard from "./HouseCard.js";

const RealtorCard = ({ imageSrc, name, number, email }) => {
  return (
    <div className="card" style={{ width: "18rem", textAlign: "center" }}>
      <img src={imageSrc} className="card-img-top pt-1" alt="Realtor" style={{ width: "100px", height: "100px", borderRadius: "50%", margin: "0 auto" }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{number}</p>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
};

function Appointment() {
  const location = useLocation();
  var { user, houseInfo,id } = location.state || {};
  let houseId = String(id);
  console.log("id:", id);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Assuming you want to edit the email, for example
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(""); // Assuming you want to edit the email, for example
  const [time, setTime] = useState("");

  const [propertyImages, setPropertyImages] = useState([]);
  useEffect(() => {
    // Function to find the property by ID and set images
    const getPropertyImages = (houseId) => {
      const property = houseInfo.find((property) => property.id === houseId);
      if (property && property.photos) {
        // Dynamically require the images based on paths
        const loadedImages = property.photos
          .map((photoPath) => {
            try {
              return require(`${photoPath}`);
            } catch (err) {
              console.error(`Failed to load image at ${photoPath}`, err);
              return null;
            }
          })
          .filter((image) => image != null); // Filter out any nulls in case of errors

        setPropertyImages(loadedImages);
        console.log(propertyImages);
      }
    };

    getPropertyImages(houseId);
  }, [houseId]);
  const [imageOfHouse, setImageOfHouse] = useState(""); // Assuming you want to edit the email, for example
  const [houseDetails, setHouseDetails] = useState({
    id: "",
    address: "",
    price: "",
    middleSchool: "",
    image: "",
    highSchool: "",
    elementarySchool: "",
    preSchool: "",
    pool: "NA",
    shopping: "",
    transportation: "",
    safety: "",
    squareFeet: "",
    bedrooms: 0,
    bathrooms: 0,
    noiseLevel: "",
    description: "",
    cleanliness: "",
    walkability: "",
    petFriendly: "",
    jackBooking: "",
  });
  useEffect(() => {
    const getHouseDetails = async (houseId) => {
      console.log("id at search:", houseId);
      const property = houseInfo.find((property) => property.id === houseId);
      console.log("property.image: ", property.image);
	  setImageOfHouse(property.image);
      if (property) {
        setHouseDetails({
          id: property.id || "",
          address: property.houseName || "",
          price: property.price || "",
          middleSchool: property.schoolsMiddle || "",
          highSchool: property.schoolsHighschool || "",
          elementarySchool: property.schoolsElementary || "",
          image: property.image || "",
          preSchool: property.schoolsPreschool || "",
          pool: property.pool || "NA",
          shopping: property.shopping || "",
          transportation: property.transportation || "",
          safety: property.safety || "",
          squareFeet: property.sqft || "",
          bedrooms: property.bedrooms || 0,
          bathrooms: property.bathrooms || 0,
          noiseLevel: property.noiseLevel || "",
          description: property.description || "",
          cleanliness: property.cleanliness || "",
          walkability: property.walkability || "",
          petFriendly: property.petFriendly || "",
          jackBooking: property.jackBooking || "",
        });
      }
      console.log("House Details:", houseDetails);
    };

    getHouseDetails(houseId);
  }, [houseId]);

  useEffect(() => {
    if (user === "Jack") {
      setName("Jack")
      setEmail("JackH88@gmail.com");
      setPhone("403-787-9987");
    } else {
      setName();
      setEmail();
      setPhone();
    }
  }, [user]);

  const navigateToPage = (url) => {
    window.location.href = url;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (user!="Jack"){
      alert("A request to view this house has been submitted. A realtor will verify your request and email a confirmation shortly.")
      navigate("/", { state: { user,houseInfo } })
    }
    if (houseDetails.jackBooking == "yes") {
      alert("A booking for this house already exists");
      navigate("/", { state: { user,houseInfo } })
    } else {
      var timePieces = time.split(":").map(Number);
      if (timePieces[0] > 12) {
        var hourAsInt = timePieces[0] - 12;
        var bookTime = date + "T" + hourAsInt + ":" + timePieces[1] + " PM";
      } else {
        var bookTime = date + "T" + timePieces[0] + ":" + timePieces[1] + " AM";
      }
      try {
        houseInfo.at(houseId-1).jackBooking="yes"
        houseInfo.at(houseId-1).timeOfBooking=bookTime
        alert("A request to view this house has been submitted. A realtor will verify your request and email a confirmation shortly.")

        navigate("/", { state: { user,houseInfo } })

      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex-row d-flex vw-50 vh-75" style={{ background: "linear-gradient(rgba(16, 166, 144, 0.5), white)" }}>
        <div className="row">
          <div className="w-25 d-flex flex-column justify-content-between">
            <div className="h-100">
              <div className="w-100 px-2 flex-column d-flex align-items-center py-2 justify-content-start pt-5">
                <RealtorCard imageSrc={realtor} name="John Realtor" number="403-899-4547" email="JohnDoesHomes@gmail.com"></RealtorCard>
              </div>
            </div>
          </div>
          <div className="col">
            <form onSubmit={handleSubmit}>
              <input className="appointmentRadio" id="inperson" type="radio" name="viewingType" value="inperson"></input>
              <label className="" for="inperson">
                In-Person Viewing
              </label>
              <input className="appointmentRadio" id="virtual" type="radio" name="viewingType" value="virtual"></input>
              <label className="" for="virtual">
                Virtual Viewing
              </label>
              <input className="appointmentForm" type="text" placeholder="Name" value={name} required></input>
              <input className="appointmentForm" type="text" placeholder="Phone #" value={phone} required></input>
              <input className="appointmentForm" type="email" placeholder="Email" value={email} required></input>
              <input className="appointmentForm" type="date" onChange={(e) => setDate(e.target.value)} required></input>
              <input className="appointmentForm" type="time" min="09:00:00" max="19:00:00" onChange={(e) => setTime(e.target.value)} required></input>
              <button type="submit" className="appointmentSubmit">
                Submit Request
              </button>
            </form>
          </div>
          <div className="w-25 d-flex flex-column justify-content-between">
            <div className="h-100">
              <div className="w-100 h-100 px-2 flex-column d-flex align-items-center py-2 justify-content-start">
                <h3 className=" py-3">Request viewing for:</h3>

                <HouseCard
                  Name={houseDetails.address}
				  Photo={imageOfHouse}
                  Price={houseDetails.price}
                  NumBath={houseDetails.bathrooms}
                  Description={houseDetails.description}
                  NumBed={houseDetails.bedrooms}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Appointment;