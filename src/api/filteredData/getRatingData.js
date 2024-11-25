const { default: mongoose } = require("mongoose");
const ReviewModel = require("../../models/ReviewModel");

const getRatingData = async (req, res, next) => {
  try {
    const productId = req.query.key;
    const ObjectId = new mongoose.Types.ObjectId(productId);
    const result = await ReviewModel.aggregate([
      { $match: { productId: ObjectId } },
      {
        $group: {
          _id: "$productId",
          averageRating: { $avg: "$rating" },
        },
      },
    ]);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getRatingData;
