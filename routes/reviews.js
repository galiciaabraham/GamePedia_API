const router = require("express").Router();
const reviewController = require("../controllers/reviewController");
const auth = require("../utilities/authenticate");
const errorHandling = require("../utilities/utilities");
const validator = require("../utilities/review-validation");

router.get("/", errorHandling.handleErrors(reviewController.getAllReviews));

/* router.get("/", reviewController.getAllReviews); */

router.get(
  "/:id",
  validator.validate,
  errorHandling.handleErrors(reviewController.getReviewById)
);

/* router.get("/:id", reviewController.getReviewById); */

router.get(
  "/game/:id",
  validator.validate,
  errorHandling.handleErrors(reviewController.getReviewsByGameId)
);

/* router.get("/game/:id", reviewController.getReviewsByGameId); */

router.get(
  "/user/:id",
  validator.validate,
  errorHandling.handleErrors(reviewController.getReviewsByUserId)
);

/* router.get("/user/:id", reviewController.getReviewsByUserId); */

router.post(
  "/",
  auth.isAthenticated,
  validator.reviewValidator(),
  validator.validate,
  errorHandling.handleErrors(reviewController.createReview)
);

/* router.post("/", reviewController.createReview); */

router.put(
  "/:id",
  auth.isAthenticated,
  validator.reviewValidator(),
  validator.validate,
  errorHandling.handleErrors(reviewController.updateReview)
);

/* router.put("/:id", reviewController.updateReview); */

router.delete(
  "/:id",
  auth.isAthenticated,
  errorHandling.handleErrors(reviewController.deleteReview)
);

/* router.delete("/:id", reviewController.deleteReview);
 */
module.exports = router;
