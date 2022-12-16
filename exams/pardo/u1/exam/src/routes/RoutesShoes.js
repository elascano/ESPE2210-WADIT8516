const express = require("express");
const shoesSchema = require("../models/shoes");

const router = express.Router();

// create shoes
router.post("/shoes", (req, res) => {
  const shoes = shoesSchema(req.body);
  shoes
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all shoes
router.get("/shoes", (req, res) => {
  shoesSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a shoe
router.get("/shoes/:id", (req, res) => {
  const { id } = req.params;
  shoesSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a shoes
router.put("/shoes/:id", (req, res) => {
  const { id } = req.params;
  const { ID_product, brand, description, price } = req.body;
  shoesSchema
    .updateOne({ _id: id }, { $set: { ID_product, brand, description, price} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;