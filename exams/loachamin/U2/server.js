const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const portParemeter = 3009;
const EndPoints = require("./api/EndPoints");
const cors = require("cors");

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/iSoftware", EndPoints);
app.get("/", (req, res) => {
  res.send("Team3 DevSolution");
});
mongoose.connect(
  "mongodb+srv://root:navetech@isoftware.ua3y4od.mongodb.net/Exam?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err, res) => {
    err && console.log("Error al conectarse a la base de datos");
    app.listen(portParemeter, () => {
      console.log(`Server is running on port ${portParemeter}`);
    });
  }
);
