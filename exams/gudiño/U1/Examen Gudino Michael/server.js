const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const portParameter = 3006
const EndPoints = require('./api/EndPoints')

var app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/Sports",EndPoints)

mongoose.connect(
    "mongodb+srv://Michael:2023@cluster0.yvtjcaf.mongodb.net/Exam?retryWrites=true&w=majority",
    {useNewUrlParser: true},
    (err, res) => {
        err && console.log("Error connecting to database")
        app.listen(portParameter,() => {
            console.log(`Server is running on port ${portParameter}`)
        })
    }
)