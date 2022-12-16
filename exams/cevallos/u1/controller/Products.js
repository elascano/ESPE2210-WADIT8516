const Product = require("../model/Product")

const createProduct = (req, res) => {
    let product = new Product({
        id: req.body.id,
        name: req.body.name,
        brand: req.body.brand
    })

    product.save((err, prod) => {
        err && res.status(500).json(err.message)
        res.status(200).json(prod)
    })
}

const getProducts = (req, res) => {
    Product.find((err, products) => {
        err && res.status(500).send(err.message)
        res.status(200).json(products)
    })
}

module.exports = { createProduct, getProducts}