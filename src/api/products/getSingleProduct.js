const ProductModel = require("../../models/ProductModel");

const getSingleProduct = async (req, res, next) => {
  try {
    const email = req.params.id;
    const product = await ProductModel.findOne({ email: email });
    res.send(product);
  } catch (err) {
    next(err);
  }
};

module.exports = getSingleProduct;
