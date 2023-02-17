const { request } = require("express");
const express = require("express");
const router = express.Router();
const VirtualMachines = require("../models/VirtualMachines")



// GET all the virtualMachines
router.get("/virtualMachines", async (req, res) => {
    // Easter Egg code 418 Teapot
    if(req.body.name != null){
        console.log("I'm not a teapot")
        res.status(418).json({message:"The server refuses the attempt to brew coffee with a teapot. This services does not use parameters"})
    }
    
    try {
        const virtualMachinesData = await VirtualMachines.find();
        res.status(200).json(virtualMachinesData);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// GET virtualMachines by id
router.get("/virtualMachines/:id", async (req,res) => {
    try {
        const virtualMachinesData = await MenuItem.find({"id":req.params.code});
        res.status(200).json(virtualMachinesData)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// POST a new virtualMachines
router.post("/virtualMachines", async (req,res) => {
    let newvirtualMachines = new VirtualMachines({
        code: req.body.id,
        name: req.body.name,
        marck: req.body.description
    })

    try {
        const virtualMachinesToSave = await newvirtualMachines.save();
        res.status(200).json({message: "Succesfully Created new Menu Item", virtualMachinesToSave})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


    





