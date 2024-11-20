const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  photo: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  availability: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  },
});

const ProductModel = model("Products", productSchema);

module.exports = ProductModel;
