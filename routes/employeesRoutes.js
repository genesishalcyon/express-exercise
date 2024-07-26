const express = require("express");
const router = express.Router();

const { getEmployees } = require("../controller/employeeController");

router.get("/employees", getEmployees);

module.exports = router;
