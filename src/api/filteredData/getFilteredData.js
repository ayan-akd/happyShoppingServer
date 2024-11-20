const ProductModel = require("../../models/ProductModel");

const getFilteredData = async (req, res, next) => {
  try {
    const key = req.query.key;

    console.log(key);
    const result = await ProductModel.aggregate([{ $group: { _id: key } }]);
    console.log(result);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getFilteredData;
