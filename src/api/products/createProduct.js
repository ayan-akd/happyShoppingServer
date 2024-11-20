const ProductModel = require("../../models/ProductModel");

const createProduct = async (req, res, next) => {
  try {
    const product = req.body;
    const result = await ProductModel.create(product);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createProduct;
