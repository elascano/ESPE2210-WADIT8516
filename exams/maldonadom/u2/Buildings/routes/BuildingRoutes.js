// BuildingRoutes.js (en la carpeta routes)
const express = require('express');
const router = express.Router();
const BuildingController = require('../controller/BuildingController');

// Crear edificio
router.post('/', BuildingController.create);

// Obtener todos los edificios
router.get('/building', BuildingController.findAll);

// Buscar edificio por ID
router.get('/:id', BuildingController.findById);

// Actualizar edificio
router.put('/:id', BuildingController.update);

// Eliminar edificio
router.delete('/:id', BuildingController.delete);

module.exports = router;
