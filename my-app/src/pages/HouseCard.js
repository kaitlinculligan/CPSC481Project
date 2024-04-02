import { Card } from "react-bootstrap";
import Bed from "./Photos/Bed.png";
import Bath from "./Photos/Bath.png";
import React from "react";
import "./HouseCard.css";

function HouseCard({ Name, Photo, Price, Description,NumBath,NumBed }) {
  const dynamicPhoto = typeof Photo === 'string' ? require(`${Photo}`) : Photo;
  return (
    <div className="w-100 h-100  d-flex align-content-center border-3 border ">
      <Card
        className="w-100 w-100 d-flex flex-column  align-items-center h-100 border-3 border border-white "
        style={{ borderColor: "grey", cursor: "pointer", height: "100%", height: "100%", background: "#FFFFFF" }}
      >
        <div
          className="row bg-black w-100 border-5 border-white border justify-content-center "
          style={{ minHeight: "10%", color: "white", fontSize: "18px", fontFamily: "Times New Roman" }}
        >
          {Name}
        </div>
        <div className=" row w-100 justify-content-evenly " style={{ minHeight: "45%" }}>
          <img
            src={dynamicPhoto}
            alt="House Photo"
            style={{ width: "75%", height: "100%", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
          />
        </div>
        <div
          className=" bg-black row w-100 border-2 border-white border justify-content-center"
          style={{ fontSize: "25px", minHeight: "10%", color: "#FFFFFF", fontFamily: "Times New Roman", borderRadius: "10px" }}
        >
          {Price}
        </div>
        <div className="row w-100 border-5 border-black border bg-white " style={{ minHeight: "35%" }}>
          <div className="w-100 h-25 row justify-content-evenly ">
            <div className="w-50 h-100 row border-bottom border-black border-1 ">
              <div className="w-50 h-100 col justify-content-start ">
                <img src={Bed} alt="House Photo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div className="w-50 h-100 col justify-content-start"style={{fontSize:"17px",fontWeight:"bolder"}}>
                {NumBed}
              </div>
            </div>
            <div className="w-50 h-100 row border-bottom border-black border-1  ms-2">
              <div className="w-50 h-100 col justify-content-start  ">
                <img src={Bath} alt="House Photo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div className="w-50 h-100 col justify-content-start " style={{fontSize:"17px",fontWeight:"bolder"}}>
                {NumBath}
              </div>
            </div>
          </div>
          <div className="w-100 h-75 ellipsis-multiline" style={{ fontStyle:"italic", fontWeight:"lighter", fontSize:"13px" }}>
            {Description}
          </div>

        </div>
      </Card>
    </div>
  );
}
export default HouseCard;
