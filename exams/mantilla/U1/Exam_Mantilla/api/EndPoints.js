const ShoeController = require("../controller/Shoes");
const express = require("express");
const router = express.Router();


router.get("/listShoes", ShoeController.getShoes);

module.exports = router;
