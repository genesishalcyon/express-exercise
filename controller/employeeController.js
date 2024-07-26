const db = require("../config/db");

const getEmployees = async (req, res) => {
  let results = await db.query("SELECT * FROM employees");

  return res.status(200).json(results);
};

const createEmployee = async (req, res) => {
  const { name } = req.body;

  const data = {
    name,
  };

  try {
    const results = await db.query({
      sql: "INSERT INTO employees (name) VALUES (?)",
      values: [name], // Wrap `name` in an array
    });

    return res.status(200).json({
      message: "Employee created successfully.",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getEmployees,
  createEmployee,
};
