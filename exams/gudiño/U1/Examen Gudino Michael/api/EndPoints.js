const SportController = require('../controller/Sports')
const express = require('express')
const router = express.Router()

router.post('/add',SportController.createSport)
router.get('/sports',SportController.getSports)
router.get('/id', SportController.getSport)
router.put('/updateSport',SportController.updateSport)
router.delete('/deleteSport',SportController.deleteSport)
module.exports = router