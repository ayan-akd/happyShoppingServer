const ReviewModel = require("../../models/ReviewModel");

const getReviews = async (req, res, next) => {
  try {
    const id = req.params.id;
    const reviews = await ReviewModel.find({ productId: id });
    res.send(reviews);
  } catch (err) {
    next(err);
  }
};

module.exports = getReviews;
