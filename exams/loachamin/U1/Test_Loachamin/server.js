const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const portParemeter = 3003;
const EndPoints = require("./api/EndPoints");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/Test", EndPoints);
app.get("/", (req, res) => {
  res.send("Team3 DevSolution");
});
mongoose.connect(
  "mongodb+srv://root:navetech@isoftware.ua3y4od.mongodb.net/Test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err, res) => {
    err && console.log("Error al conectarse a la base de datos");
    app.listen(portParemeter, () => {
      console.log(`Server is running on port ${portParemeter}`);
    });
  }
);
