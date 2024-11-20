const ProductModel = require("../../models/ProductModel");


const updateProduct = async (req, res, next) => {
  try {
    // const user = req.body;
    // const result = await ProductModel.updateOne(
    //   { _id: id },
    //   { role: user.role }
    // );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = updateProduct;