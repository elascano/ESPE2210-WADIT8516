const User = require("../model/User");

const createUser = (req, res) => {
  let user = new User({
    id_user: req.body.id_user,
    identification: req.body.identification,
    name_user: req.body.name_user,
    lastname_user: req.body.lastname_user
   
  });
  user.save((err, use) => {
    err && res.status(500).json(err.message);
    res.status(200).json(use);
  });
};

const getUsers = (req, res) => {
  User.find((err, use) => {
    err && res.status(500).send(err.message);
    res.status(200).json(use);
  });
};
const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { id_user: req.body.id_user },
    {
      identification: req.body.identification,
      name_user: req.body.name_user,
      lastname_user: req.body.lastname_user,
      address: req.body.address,
      phone: req.body.phone,
    },
    (err, use) => {
      err && res.status(500).send(err.message);
      res.status(200).send(use);
    }
  );
};

const deleteUser = (req, res) => {
  User.findOneAndDelete({ id_user: req.body.id_user }, (err, use) => {
    err && res.status(501).send(err.message);
    res.status(200).send(use);
  });
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
