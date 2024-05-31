
const router = require("express").Router();
const reviewController = require("../controllers/reviewController");
const auth = require("../utilities/authenticate");
const errorHandling = require("../utilities/utilities");
const validator = require("../utilities/review-validation");


router.get("/", errorHandling.handleErrors(reviewController.getAllReviews));

router.get("/:id", validator.reviewSearchValidator(), validator.validate, errorHandling.handleErrors(reviewController.getReviewById));

router.get("/game/:id", validator.reviewSearchValidator(), validator.validate,  errorHandling.handleErrors(reviewController.getReviewsByGameId));

router.get("/user/:id", validator.reviewSearchValidator(), validator.validate, errorHandling.handleErrors(reviewController.getReviewsByUserId));

router.post("/", auth.isAthenticated, validator.reviewValidator(), validator.validate,  errorHandling.handleErrors(reviewController.createReview));

router.put("/:id", auth.isAthenticated, validator.reviewSearchValidator(), validator.validate, validator.reviewValidator(), validator.validate, errorHandling.handleErrors(reviewController.updateReview));

router.delete("/:id", auth.isAthenticated, validator.reviewSearchValidator(), validator.validate,  errorHandling.handleErrors(reviewController.deleteReview));



module.exports = router;


