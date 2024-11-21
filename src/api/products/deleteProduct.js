const ProductModel = require("../../models/ProductModel");

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ProductModel.findOneAndDelete({ _id: id });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = deleteProduct;
