const { body, param, validationResult } = require("express-validator");

const reviewValidator = () => {
  return [
    body("UserId", "UserId is required and should be a number").isNumeric(),
    body("Title", "Title of the review is required").notEmpty(),
    body("Content", "Content of the review is required").notEmpty(),
    body("Rating", "Rating is required and should be a number between 1 and 5")
      .isNumeric()
      .custom((value) => value >= 1 && value <= 5),
    body("Date", "Date is required and should be in ISO format").notEmpty(),
    body(
      "Verified",
      "Verified is required and should be a boolean value"
    ).isBoolean(),
    body("GameId", "GameId is required and should be a valid ObjectId")
      .notEmpty()
      .isLength(24),
  ];
};

/* const reviewSearchValidator = () => {
  return [param("reviewId", "Please enter a valid review id").notEmpty()];
}; */

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

module.exports = { reviewValidator, /*reviewSearchValidator,*/ validate };
