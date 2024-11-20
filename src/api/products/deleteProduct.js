const ProductModel = require("../../models/ProductModel");

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = ProductModel.deleteOne({ _id: id });
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = deleteProduct;
