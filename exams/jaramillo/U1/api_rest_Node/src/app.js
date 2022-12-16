import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import soccerTeamRoutes from "./routers/soccerTeam.routes.js";

const app = express();

//Conection database
const DATABASE_URI =
  "mongodb+srv://admin:admin@cluster0.jxs7dq3.mongodb.net/ExamDB?retryWrites=true&w=majority";

mongoose
  .connect(DATABASE_URI)
  .then(() => console.log("Database is conected"))
  .catch((error) => console.log(error));

//midelwares
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.json({
    name: "Exam REST",
    author: "Jaramillo Steven",
    desciption: "Exam REST",
    version: "1.0.0",
  });
});

app.use("/soccerTeam", soccerTeamRoutes);

export default app;
