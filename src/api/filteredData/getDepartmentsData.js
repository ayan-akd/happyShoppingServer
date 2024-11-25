const ProductModel = require("../../models/ProductModel");

const getDepartmentsData = async (req, res, next) => {
  try {
    const key = req.query.key;
    const result = await ProductModel.aggregate([{ $group: { _id: key } }]);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getDepartmentsData;
