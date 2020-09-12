const express = require("express");
const router = express.Router();
const reviews = require("../data/reviews.json");


router.get ("/",async (req, res) => {
    res.json(reviews);
})

router.get("/:id", async (req, res) => {
    let reviewId = req.params.id;
    reviews.forEach((review) => {
      if (review.id === parseInt(reviewId)) {
        res.json(review);
      } 
    });
    res.send("no review founded");
   

});

module.exports = router;