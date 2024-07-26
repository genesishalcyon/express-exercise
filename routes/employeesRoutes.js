const express = require("express");
const router = express.Router();

const {
  getEmployees,
  createEmployee,
} = require("../controller/employeeController");

const {
  createEmployeeValidator,
} = require("../validators/employeesValidators");

router.get("/employees", getEmployees);

router.post("/employees", createEmployeeValidator, createEmployee);

module.exports = router;
