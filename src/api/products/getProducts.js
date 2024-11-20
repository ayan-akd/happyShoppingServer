const ProductModel = require("../../models/ProductModel");

const getProducts = async (req, res, next) => {
  try {
    const products = await ProductModel.find();
    res.send(products);
  } catch (err) {
    next(err);
  }
};

module.exports = getProducts;
