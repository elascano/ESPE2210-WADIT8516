const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mapRoute = require("./routes/maps");

require("dotenv").config();

mongoose.set("strictQuery", true);
const app = express();
const PORT = 3016;

app.use(cors());

//midlewares
app.use(express.json());
app.use("/api", mapRoute);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to Maps REST Crithian Romero");
  res.json({ ok: true });
});

mongoose
  .connect("mongodb+srv://romero:romero@cluster0.2pwnkti.mongodb.net/MapsDB?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((error) => console.log("MongoDB Connection Failed"));

app.listen(PORT, () => console.log("Server started on port", PORT));
