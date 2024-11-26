const OrderModel = require("../../models/orderModel");

const getOrders = async (req, res, next) => {
  try {
    const email = req.query.email;
    const orders = await OrderModel.find({ email: email });
    res.status(201).send(orders);
  } catch (err) {
    next(err);
  }
};

module.exports = getOrders;
