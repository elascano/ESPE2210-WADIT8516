
const UserController = require("../controller/Users");

const express = require("express");
const router = express.Router();


router.post("/addUser", UserController.createUser);
router.get("/listUsers", UserController.getUsers);
router.put("/updateUser", UserController.updateUser);
router.delete("/deleteUser", UserController.deleteUser);


module.exports = router;
