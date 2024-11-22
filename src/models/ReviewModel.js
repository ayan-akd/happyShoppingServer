const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  photo: {
    type: String,
    required: false,
  },
  review: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const ReviewModel = model("Reviews", reviewSchema);

module.exports = ReviewModel;
