const Soccer = require("../model/Soccer")

const createSoccer = (req, res) => {
    let soccer = new Soccer({
        id: req.body.id,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        country: req.body.country
        
    })

    soccer.save((err, prod) => {
        err && res.status(500).json(err.message)
        res.status(200).json(prod)
    })
}


const getSoccers = (req, res) => {
    Soccer.find((err, Soccers) => {
        err && res.status(500).send(err.message)
        res.status(200).json(Soccers)
    })
}

const getSoccer = (req, res) => {
    Soccer.find({ "id": req.params.id }, (err, prod) => {
        err && res.status(500).send(err.message)
        res.status(200).json(prod)
    })
}


const updateProfit = (req, res) => {
    try {
        Soccer.findOneAndUpdate({ id: req.body.id }, {
            id: req.body.id,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            country: req.body.country
        },
            (err, produ) => {
                err && res.status(500).json(err.message)
                res.status(200).json(produ)
            })
    } catch (error) {
        res.status(404).json({ Error: "Client not found" })
    }
}

const deleteSoccer = (req, res) => {
    Soccer.findOneAndDelete({ id: req.body.id }, (err, prod) => {
        err && res.status(500).send(err.message)
        res.status(200).send(prod)
    })
}

module.exports = { createSoccer, getSoccers, getSoccer, updateProfit, deleteSoccer }