const Building = require("../model/Building");

const createBuilding = (req, res) => {
  let builging = new Building({
    id: req.body.id,
    description: req.body.description,
    address: req.body.address,
  });
  builging.save((err, use) => {
    err && res.status(500).json(err.message);
    res.status(200).json(use);
  });
};


module.exports = {
  createBuilding,
};
