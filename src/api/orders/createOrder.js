const OrderModel = require("../../models/orderModel");

const createOrder = async (req, res, next) => {
  try {
    const { order } = req.body;
    const result = await OrderModel.create(order);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createOrder;
