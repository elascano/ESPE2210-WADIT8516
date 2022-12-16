const UniversityController = require("../controller/Universities");
const express = require("express");
const router = express.Router();

router.get("/listUniversities", UniversityController.getUniversities);

module.exports = router;
