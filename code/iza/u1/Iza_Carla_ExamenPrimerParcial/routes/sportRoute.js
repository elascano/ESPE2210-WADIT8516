const SportController = require('../controller/Sport')
const express = require('express')
const router = express.Router()

router.post('/add', SportController.createSport)
router.get('/Sport', SportController.getSport)
router.get('/Sport/:id', SportController.getSport)
router.put('/updateSport', SportController.updateProfit)
router.delete('/deleteSport', SportController.deleteSport)

module.exports = router