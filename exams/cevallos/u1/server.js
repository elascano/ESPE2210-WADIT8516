const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const portParameter = 3005;
const endPoints = require("./routes/productRoute");


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/keyboards", endPoints);

mongoose.connect(
  "mongodb+srv://MarlonTeam2:2022@cluster0.pvig5s9.mongodb.net/Examen?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err, res) => {
    err && console.log("Error connecting to database");
    app.listen(portParameter, () => {
      console.log(`Server is running on port ${portParameter}`);
    });
  }
);
