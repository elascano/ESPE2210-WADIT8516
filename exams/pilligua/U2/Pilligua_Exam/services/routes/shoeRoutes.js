const express = require("express");
const shoe = require("../models/shoe");
const router = express.Router();
//Get all shoes
router.get("/shoes", async (req, res) => {
    try {
        const shoes = await shoe.find();
        res.json(shoes)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// post Create/Insert one shoes
router.post('/shoe', async (req, res) => {
    const shoeObject = new shoe({
        id: req.body.id,
        description: req.body.description,
        price: req.body.price,

    });

    try {
        const shoeToSave = await shoeObject.save();
        res.status(200).json(shoeToSave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router

