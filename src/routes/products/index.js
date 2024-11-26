var express = require("express");
const getSingleProduct = require("../../api/products/getSingleProduct");
const getProducts = require("../../api/products/getProducts");
const createProduct = require("../../api/products/createProduct");
const updateProduct = require("../../api/products/updateProduct");
const deleteProduct = require("../../api/products/deleteProduct");
var router = express.Router();

router.get("/products/:id", getSingleProduct);
router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
