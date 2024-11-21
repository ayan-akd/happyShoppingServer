const ReviewModel = require("../../models/ReviewModel");

const deleteReview = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ReviewModel.findOneAndDelete({ _id: id });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = deleteReview;
