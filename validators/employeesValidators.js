const createEmployeeValidator = (req, res, next) => {
  const { name } = req.body;
  let errors = [];
  if (!name) {
    errors.push({
      name: "Name is required",
    });
  }

  if (errors?.length > 0) {
    return res.status(422).json(errors);
  }

  next();
};

module.exports = {
  createEmployeeValidator,
};
