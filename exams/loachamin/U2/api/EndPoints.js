const BuildingController = require("../controller/Buildings");
const express = require("express");
const router = express.Router();

router.post("/post/Building", BuildingController.createBuilding);

module.exports = router;
