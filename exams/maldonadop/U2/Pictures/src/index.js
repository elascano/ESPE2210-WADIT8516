const express = require ("express");
const mongoose = require("mongoose");
const pictureRoutes = require("./routes/pictures")
require("dotenv").config();

const app = express();
const port = process.env.port || 4000;

//routes
app.use(express.json());
app.use('/get', pictureRoutes);


mongoose.set("strictQuery", false);
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Coneccion Correcta"))
.catch((error) => console.log(error))

app.listen(port, () => console.log("server listening on port", port));