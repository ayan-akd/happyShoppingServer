const ReviewModel = require("../../models/ReviewModel");

const updateReview = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedReview = req.body;
    const result = await ReviewModel.findOneAndUpdate(
      { _id: id },
      updatedReview,
      { new: true }
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = updateReview;
