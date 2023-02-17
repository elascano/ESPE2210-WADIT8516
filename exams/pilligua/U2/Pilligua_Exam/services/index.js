const port = 3015
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://Alejandro:adm123@alejandropilligua.krdyshb.mongodb.net/shoestoredb?retryWrites=true&w=majority`, { useNewUrlParser: true })

const db = mongoose.connection;

db.on("error", (error) => crossOriginIsolated.error(error));
db.once("open", () => console.log("System connected to MongoDB Database"));

app.use(express.json());

const shoeRouter = require("./routes/shoeRoutes");
app.use("/shoestore", shoeRouter);

app.listen(port, () => console.log('Server is running  on port --> ' + port));