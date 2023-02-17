import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dressRoutes from "./routers/dress.routes.js";

const app = express();

//Conection database
const DATABASE_URI =
  "mongodb+srv://naty:naty1995@clusterapi.fbl34iy.mongodb.net/exam?retryWrites=true&w=majority";

mongoose
  .connect(DATABASE_URI)
  .then(() => console.log("Database is conected"))
  .catch((error) => console.log(error));

//midelwares
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {});

app.use("/dresses", dressRoutes);

export default app;
