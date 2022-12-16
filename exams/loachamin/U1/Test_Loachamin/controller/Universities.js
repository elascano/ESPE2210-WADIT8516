const University = require("../model/University");



const getUniversities = (req, res) => {
  University.find((err, use) => {
    err && res.status(500).send(err.message);
    res.status(200).json(use);
  });
};


module.exports = { getUniversities};
