var express = require("express");
const getOrders = require("../../api/orders/getOrders");
const createOrder = require("../../api/orders/createOrder");
var router = express.Router();

router.get("/orders", getOrders);
router.post("/orders", createOrder);

module.exports = router;
