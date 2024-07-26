const db = require("../config/db");

const getEmployees = async (req, res) => {
  let results = await db.query("SELECT * FROM employees");

  return res.status(200).json(results);
};

module.exports = {
  getEmployees,
};
