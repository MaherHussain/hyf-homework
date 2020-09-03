const express = require("express");
const router = express.Router();
const reservations = require("../data/resrvations.json");

// response all reservations.
router.get("/" , async(req, res,next) =>{
    res.json(reservations);
next();
})


router.get("/:id", async (req, res, next) => {
    let reserId = req.params.id;
 reservations.forEach((elem) => {
      if (elem.id === parseInt(reserId)) {
    return res.json(elem )
    }
   
  })
 res.status(400).send("not founded");


    
});

module.exports = router;