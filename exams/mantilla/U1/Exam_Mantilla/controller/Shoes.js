const Shoe = require("../model/Shoe");

const getShoes = (req, res) => {
  Shoe.find((err, use) => {
    err && res.status(500).send(err.message);
    res.status(200).json(use);
  });
};


module.exports = { getShoes};
