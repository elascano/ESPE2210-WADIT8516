const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const portParameter = 3006;
const Api = require("./routes/deskRoute");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/test", Api);

mongoose.connect(
  "mongodb+srv://Michael:2023@cluster0.icc4l7k.mongodb.net/test",
  { useNewUrlParser: true },
  (err, res) => {
    err && console.log("Error connecting to database");
    app.listen(portParameter, () => {
      console.log(`Server is running on port ${portParameter}`);
    });
  }
);
