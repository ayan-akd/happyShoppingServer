const ProductModel = require("../../models/ProductModel");

const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedProduct = req.body;
    const result = await ProductModel.findOneAndUpdate(
      { _id: id },
      updatedProduct,
      { new: true }
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = updateProduct;
