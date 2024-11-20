var express = require("express");
const getFilteredData = require("../../api/filteredData/getFilteredData");
var router = express.Router();

router.get("/filters", getFilteredData);

module.exports = router;
