const ProductModel = require("../../models/ProductModel");

const getProducts = async (req, res, next) => {
  try {
    const result = await ProductModel.find();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getProducts;
