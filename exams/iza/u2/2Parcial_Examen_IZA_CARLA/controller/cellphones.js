const CELLPHONES = require("../model/cellphones")

const createCellphones= (req, res) => {
    let Cellphones = new Cellphones({
        id: req.body.id,
        name: req.body.name,
        dercription: req.body.dercription,      
        
    })

    cellphones.save((err, prod) => {
        err && res.status(500).json(err.message)
        res.status(200).json(prod)
    })
}


const getCellphones = (req, res) => {
    Cellphones.find({ "id": req.params.id }, (err, prod) => {
        err && res.status(500).send(err.message)
        res.status(200).json(prod)
    })
}


const updateProfit = (req, res) => {
    try {
        Cellphones.findOneAndUpdate({ id: req.body.id }, {
            id: req.body.id,
            name: req.body.name,
            dercription: req.body.dercription,
            
        },
            (err, produ) => {
                err && res.status(500).json(err.message)
                res.status(200).json(produ)
            })
    } catch (error) {
        res.status(404).json({ Error: "Client not found" })
    }
}

const deleteCellphones = (req, res) => {
    Cellphones.findOneAndDelete({ id: req.body.id }, (err, prod) => {
        err && res.status(500).send(err.message)
        res.status(200).send(prod)
    })
}

module.exports = { createCellphones, getCellphones, getCellphones, updateProfit, deleteCellphones }