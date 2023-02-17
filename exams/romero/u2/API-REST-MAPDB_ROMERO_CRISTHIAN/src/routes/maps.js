const express = require("express");
const mapSchema = require("../models/maps");

const router = express.Router();

// create map
router.post("/maps", (req, res) => {
  const map = mapSchema(req.body);

  map
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all maps
router.get("/maps", (req, res) => {
  mapSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a map
router.get("/maps/:id", (req, res) => {
  const { id } = req.params;
  mapSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a map
router.delete("/maps/:id", (req, res) => {
  const { id } = req.params;
  mapSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a map
router.put("/maps/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, coordinates } = req.body;
  mapSchema
    .updateOne({ _id: id }, { $set: { name, description, coordinates } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
