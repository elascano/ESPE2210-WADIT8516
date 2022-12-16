const ProductsController = require('../controller/Products')
const express = require('express')
const router = express.Router()

router.post('/add', ProductsController.createProduct)
router.get('/products', ProductsController.getProducts)

module.exports = router