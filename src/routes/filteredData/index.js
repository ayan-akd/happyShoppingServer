var express = require("express");
const getDepartmentsData = require("../../api/filteredData/getDepartmentsData");
const getRatingData = require("../../api/filteredData/getRatingData");
var router = express.Router();

router.get("/departments", getDepartmentsData);
router.get("/ratings", getRatingData);

module.exports = router;
