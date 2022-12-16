const express = require("express");
const professorSchema = require("../models/professor");

const router = express.Router();

// create professor
router.post("/professors", (req, res) => {
  const professor = professorSchema(req.body);
  professor
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all professors
router.get("/professors", (req, res) => {
  professorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a professor
router.get("/professors/:id", (req, res) => {
  const { id } = req.params;
  professorSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a professor
router.delete("/professors/del/:id", (req, res) => {
  const { id } = req.params;
  professorSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a professor
router.put("/professors/upd/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  professorSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
