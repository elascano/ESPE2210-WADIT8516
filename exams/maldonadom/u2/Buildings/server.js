// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const BuildingRoutes = require('./routes/BuildingRoutes');
const portParemeter = 3010;
const app = express();

mongoose.connect(
    "mongodb+srv://root:1234@isoftware.wuvm6ab.mongodb.net/Buildings?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    (err, res) => {
      err && console.log("Error al conectarse a la base de datos");
      app.listen(portParemeter, () => {
        console.log(`Server is running on port ${portParemeter}`);
      });
    }
  );

// Configurar middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Utilizar rutas de edificio
app.use('/buildings', BuildingRoutes);

