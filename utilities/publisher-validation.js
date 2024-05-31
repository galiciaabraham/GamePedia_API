const { body, param, validationResult } = require("express-validator");

const publisherValidator = () => {
  return [
    body("Name", "Name of the publisher required").notEmpty(),
    body("Founder", "Year founded is required").notEmpty(),
    body("Headquarters", "Name of Publisher Headquarters required").notEmpty(),
    body("President", "Name of Publisher President required").notEmpty(),
    body("Website", "Publisher Website required").notEmpty(),
  ];
};

const publisherSearchValidator = () => {
  return [
    param("publisherId", "Please enter a valid id").notEmpty().isLength(24),
  ];
};

const publisherNameSearchValidator = () => {
  return [param("name", "Please enter a valid name").notEmpty()];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const errorList = [];
  errors.array().map((error) => {
    errorList.push({
      [error.path]: error.msg,
    });
  });
  return res.status(400).json({
    errors: errorList,
  });
};

module.exports = {
  publisherNameSearchValidator,
  publisherValidator,
  publisherSearchValidator,
  validate,
};
