var express = require("express");
const createPayment = require("../../api/payment/createPayment");
const sendMail = require("../../api/payment/sendMail");
var router = express.Router();

router.post("/send-mail", sendMail);
router.post("/payment", createPayment);

module.exports = router;
