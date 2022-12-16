const Sport = require('../model/Sport')
const createSport = (req, res) => {
    let sport = new Sport({
        id: req.body.id,
        name: req.body.name,
        country: req.body.country,
        city: req.body.city,
        place: req.body.place
    })
    sport.save((err, spo) => {
        err && res.status(500).json(err.message)
        res.status(200).json(spo)
    })
}
const getSport = (req, res) => {
    Sport.find({id: req.body.id}, (err, spo) => {
        err && res.status(500).send(err.message)
        res.status(200).json(spo)
    })
}

const getSports = (req, res) => {
    Sport.find((err, sports) => {
        err && res.status(500).send(err.message)
        res.status(200).json(sports)
    })
}

const updateSport = (req, res) => {
    Sport.findOneAndUpdate({id: req.body.id},{place: req.body.place}, (err, spo) => {
        err && res.status(500).send(err.message)
        res.status(200).send(spo)
    })
}
const deleteSport = (req, res) => {
    Sport.findOneAndDelete({id: req.body.id}, (err, spo) => {
        err && res.status(501).send(err.message)
        res.status(200).send(spo)
    })
}
module.exports = {createSport, getSport, getSports, updateSport, deleteSport}