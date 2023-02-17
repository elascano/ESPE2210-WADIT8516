const Desk = require("../model/Desk");

const createDesk = (req, res) => {
  let desk = new Desk({
    id: req.body.id,
    description: req.body.description,
    material: req.body.material,
  });
  desk.save((err, des) => {
    err && res.status(500).json(err.message);
    res.status(200).json(des);
  });
};

const getDesks = (req, res) => {
  Desk.find((err, des) => {
    err && res.status(500).send(err.message);
    res.status(200).json(des);
  });
};

module.exports = {
  createDesk,  
  getDesks,
};
