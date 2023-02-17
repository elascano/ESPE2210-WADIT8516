const express = require("express");
const pictureSchema = require("../models/picturesModel")


const router = express.Router();

//method post
router.post("/pictures", (req, res) => {
    const picture = pictureSchema(req.body);
    picture
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json ({ message: error }));
});


module.exports=router;