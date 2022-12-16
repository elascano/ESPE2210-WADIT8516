const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors')
const userRoute = require("./routes/RoutesShoes");

const { application } = require('express');

require ('dotenv').config();

mongoose.set('strictQuery', true);
const app = express();
const PORT = process.env.PORT || 3013

app.use (cors())

//midlewares
app.use(express.json());
//app.use("/api", RouteShoes);


//routes
app.get("/", (req, res) => {
    res.send('Welcome to  my API Romulo Pardo');
    res.json({ok:true})
});

 mongoose.connect(process.env.URI_MONGODB)
.then(()=> console.log('Connect to MONGODB Romulo Pardo is Successfully 👋'))
.catch((error) => console.log('Connection fail MongoDB Atlas'));


app.listen(PORT, () => console.log('Server started on port', PORT ));
