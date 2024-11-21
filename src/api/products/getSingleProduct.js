const ProductModel = require("../../models/ProductModel");

const getSingleProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    res.send(product);
  } catch (err) {
    next(err);
  }
};

module.exports = getSingleProduct;
