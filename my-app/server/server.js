const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to update houseInfo.json
app.post("/update-house-info", (req, res) => {
  const { id, updates } = req.body; // Expecting 'id' of the house and 'updates' object
  const filePath = path.join(__dirname, "../src/pages/houseinfo.json"); // Adjust path as necessary
 console.log("id",id)
 console.log("updates",updates)
  // Read the current data from houseInfo.json
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return res.status(500).send("Error reading from file");
    }

    // Parse the JSON data
    let houses;
    try {
      houses = JSON.parse(data.toString());
      console.log("houses:",houses)
    } catch (parseError) {
      console.error("Error parsing JSON from file:", parseError);
      return res.status(500).send("Error parsing JSON data");
    }

    // Find the house and apply updates
    const houseIndex = houses.findIndex((house) => house.id === id.toString());
    if (houseIndex === -1) {
      return res.status(404).send("House not found");
    }

    // Apply updates to the found house
    houses[houseIndex] = { ...houses[houseIndex], ...updates };

    // Write the updated data back to the JSON file
    fs.writeFile(filePath, JSON.stringify(houses, null, 2), (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
        return res.status(500).send("Error writing to file");
      }
    res.send({ ok: true, message: "House info updated successfully" });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
