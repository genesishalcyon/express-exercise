const express = require("express");
const employeesRoutes = require("./routes/employeesRoutes");

const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

app.use(employeesRoutes);
app.options("*");

app.get("/hello", (req, res) => {
  return res.status(200).json({
    message: "Hello",
  });
});

app.listen(2000, () => {
  console.log("Listening http://localhost:2000");
});
