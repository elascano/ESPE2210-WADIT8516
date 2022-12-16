const SoccersController = require('../controller/Soccers')
const express = require('express')
const router = express.Router()

router.post('/postsoccer', SoccersController.createSoccer)
router.get('/soccers', SoccersController.getSoccers)
router.get('/soccer/:id', SoccersController.getSoccer)
router.put('/updateSoccer', SoccersController.updateProfit)
router.delete('/deleteSoccer', SoccersController.deleteSoccer)

module.exports = router