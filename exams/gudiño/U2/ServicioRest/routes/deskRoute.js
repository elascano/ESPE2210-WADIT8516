const DeskController = require('../controller/Desk');
const express = require('express');
const router = express.Router();

router.get("/desk", DeskController.getDesks);

module.exports = router;