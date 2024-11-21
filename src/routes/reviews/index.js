var express = require("express");
const getReviews = require("../../api/reviews/getReviews");
const createReview = require("../../api/reviews/createReview");
const updateReview = require("../../api/reviews/updateReviews");
const deleteReview = require("../../api/reviews/deleteReview");
var router = express.Router();

router.get("/reviews/:id", getReviews);
router.post("/reviews", createReview);
router.put("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);

module.exports = router;
