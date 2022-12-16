const express = require("express");
const router = express.Router();
const Traffic = require("../models/Traffic")

module.exports = router;

// GET all users
router.get("/traffic", async (req, res) => {
    try {
        const trafficResults = await Traffic.find();
        res.status(200).json(trafficResults);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})