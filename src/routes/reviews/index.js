var express = require("express");
const getReviews = require("../../api/reviews/getReviews");
const createReview = require("../../api/reviews/createReview");
var router = express.Router();

router.get("/reviews/:id", getReviews);
router.post("/reviews", createReview);

module.exports = router;
