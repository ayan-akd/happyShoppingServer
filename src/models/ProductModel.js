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
    type: Number,
  },
  photo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
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
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
});

const ProductModel = model("Products", productSchema);

module.exports = ProductModel;