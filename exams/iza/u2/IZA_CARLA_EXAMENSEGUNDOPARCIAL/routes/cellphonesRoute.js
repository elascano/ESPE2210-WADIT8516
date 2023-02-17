const CellphonesController = require('../controller/cellphones')
const express = require('express')
const router = express.Router()

router.post('/add', CellphonesController.createCellphones)
router.get('/Cellphones', CellphonesController.getCellphones)
router.get('/Cellphones/:id', CellphonesController.getCellphones)
router.put('/updateCellphones', CellphonesController.updateProfit)
router.delete('/deleteCellphones', CellphonesController.deleteCellphones)

module.exports = router