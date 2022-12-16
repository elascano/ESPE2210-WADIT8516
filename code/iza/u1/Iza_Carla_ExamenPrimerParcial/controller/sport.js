const SPORT = require("../model/Sport")

const createSport= (req, res) => {
    let Sport = new Sport({
        id: req.body.id,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        
    })

    sport.save((err, prod) => {
        err && res.status(500).json(err.message)
        res.status(200).json(prod)
    })
}


const getSport = (req, res) => {
    Sport.find({ "id": req.params.id }, (err, prod) => {
        err && res.status(500).send(err.message)
        res.status(200).json(prod)
    })
}


const updateProfit = (req, res) => {
    try {
        Sport.findOneAndUpdate({ id: req.body.id }, {
            id: req.body.id,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
        },
            (err, produ) => {
                err && res.status(500).json(err.message)
                res.status(200).json(produ)
            })
    } catch (error) {
        res.status(404).json({ Error: "Client not found" })
    }
}

const deleteSport = (req, res) => {
    Sport.findOneAndDelete({ id: req.body.id }, (err, prod) => {
        err && res.status(500).send(err.message)
        res.status(200).send(prod)
    })
}

module.exports = { createSport, getSport, getSport, updateProfit, deleteSport }