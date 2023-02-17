const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
require("dotenv").config()

// Parser for error we had in class on POST when parsing body of Request
// modified from Tema 2 Tutorial 
// and https://stackoverflow.com/questions/69913477/cannot-read-properties-of-undefined-in-nodejs
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes 
const routes = require("./routes/VirtualMachinesRoutes");
app.use('/virtual', routes)

// Connect to DB Using Environment Variables
console.log("this are the credentials: " + process.env.MONGO_USER + process.env.MONGO_PSWD)
url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PSWD}@cluster0.6mgeegi.mongodb.net/?retryWrites=true&w=majority`;
const database = mongoose.connection;
mongoose.connect(url);
database.on("error", console.error.bind(console, "Error connecting to MongoDB"));
database.once('connected', () => {console.log("Succesfuly connected to MongoDB")});

app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Server Running in Port ${process.env.PORT}`)
})

// Make an Index for the API TODO
app.get("/virtual", function(req,res) {
    res.send("Hello World!")
})