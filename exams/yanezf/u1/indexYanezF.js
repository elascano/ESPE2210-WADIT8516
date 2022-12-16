const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// For env Variables
require("dotenv").config();

//Parse Request
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
const trafficRoutes = require("./routes/trafficRoutes");
app.use('/yanez/api', trafficRoutes);

// DB
url = `mongodb+srv://${process.env.MONGO_YANEZ_USER}:${process.env.MONGO_YANEZ_PASS}@mongoji.nf5scze.mongodb.net/WAD_YANEZF_EXAMEN_P1?retryWrites=true&w=majority`;
const database = mongoose.connection;
mongoose.connect(url);
database.on("error",  console.error.bind(console, "Error connecting to MongoDB"));
database.once('connected', () => {console.log("Succesfuly connected to MongoDB")});



// Listen App
app.use(express.json);
app.listen(process.env.PORT_YANEZ, () => {
    console.log(`Listening in ${process.env.PORT_YANEZ}`);
})