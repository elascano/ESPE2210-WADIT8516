const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const portParemeter = 3012;
const EndPoints = require("./api/EndPoints");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/Shoes", EndPoints);
app.get("/", (req, res) => {
  res.send("Exam");
});
mongoose.connect(
  "mongodb+srv://DiegoMantilla:12345@cluster0.g6yvahv.mongodb.net/iSoftware?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err, res) => {
    err && console.log("Error al conectarse a la base de datos");
    app.listen(portParemeter, () => {
      console.log(`Server is running on port ${portParemeter}`);
    });
  }
);
