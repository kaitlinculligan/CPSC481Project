import { Card } from "react-bootstrap";

function HouseCard({ Name, Photo, Price, Description }) {
  return (
    <div className="w-100 h-100  d-flex align-content-center border-3 border " style={{ maxWidth:"400px", marginLeft: "500px", marginRight: "500px", marginTop: "100px" }}>
      <Card className="w-100 w-100 d-flex flex-column  align-items-center h-100" style={{ borderColor: "grey", cursor: "pointer", height: "100%", height: "100%" }}>
        <div className="row bg-black w-100 border-5 border-success border" style={{ minHeight: "10%" }}>
          <h1 style={{ fontWeight: "bold", color: "white" }}>{Name}</h1>
        </div>
        <div className="bg-success row w-100" style={{ minHeight: "45%" }}>
          <img
            src={Photo}
            alt="House Photo"
            style={{ width: "100%", height: "100%", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
          />
        </div>
        <div className=" bg-black row w-100 border-5 border-success border" style={{ minHeight: "10%" }}>
          <h1 style={{ fontWeight: "bold", color: "white" }}>{Price}</h1>
        </div>
        <div className="bg-black row w-100 border-5 border-success border" style={{ minHeight: "35%" }}>
          <p2 style={{ fontWeight: "bold", color: "white" }}>{Description}</p2>
        </div>
      </Card>
    </div>
  );
}
export default HouseCard;
