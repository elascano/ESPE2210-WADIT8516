import express from "express";
import watchrouter from "./routers/smartwatch.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Luis Yepez API");
});
app.use("/api/smartwatch", watchrouter);

export default app;