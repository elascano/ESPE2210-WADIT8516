const express = require("express");
const bankSchema = require("../models/banks");

const router = express.Router();

// create banks
router.post("/banks", (req, res) => {
  const bank = bankSchema(req.body);
  bank
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all banks
router.get("/banks", (req, res) => {
  bankSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a banks
router.get("/banks/:id", (req, res) => {
  const { id } = req.params;
  bankSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a banks
router.delete("/banks/:id", (req, res) => {
  const { id } = req.params;
  bankSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a banks
router.put("/banks/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  bankSchema
    .updateOne({ _id: id }, { $set: { ID_Bank, name, direction, telephone } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
