const express = require("express");
const studentSchema = require("../models/student");

const router = express.Router();

// create student
router.post("/students", (req, res) => {
  const student = studentSchema(req.body);
  student
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all student
router.get("/students", (req, res) => {
  studentSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a student
router.get("/students/:id", (req, res) => {
  const { id } = req.params;
  studentSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a student
router.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  studentSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a student
router.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  studentSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
