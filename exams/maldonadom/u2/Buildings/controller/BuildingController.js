// BuildingController.js (en la carpeta controller)
const Building = require('../model/Building');
const mongoose = require('mongoose');

// Crear edificio
exports.create = (req, res) => {
  const building = new Building({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    telephone: req.body.telephone
  });

  building.save()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

// Obtener todos los edificios
exports.findAll = (req, res) => {
  Building.find()
    .then(buildings => {
      res.json(buildings);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};
// Buscar edificio por ID
exports.findById = (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
  
    Building.findById(id)
      .then(building => {
        if (!building) {
          return res.status(404).json({ message: 'Building not found' });
        }
        res.json(building);
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  };


// Actualizar edificio
exports.update = (req, res) => {
  Building.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(building => {
      if (!building) {
        return res.status(404).json({ message: 'Building not found' });
      }
      res.json(building);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

// Eliminar edificio
exports.delete = (req, res) => {
  Building.findByIdAndRemove(req.params.$id)
    .then(building => {
      if (!building) {
        return res.status(404).json({ message: 'Building not found' });
      }
      res.json({ message: 'Building deleted successfully' });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};
