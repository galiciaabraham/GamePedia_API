const router = require("express").Router();
const reviewController = require("../controllers/reviewController");
const auth = require("../utilities/authenticate");

router.get("/", reviewController.getAllReviews);

router.get("/:id", reviewController.getReviewById);

router.get("/game/:id", reviewController.getReviewsByGameId);

router.get("/user/:id", reviewController.getReviewsByUserId);

router.post("/", auth.isAthenticated, reviewController.createReview);

router.put("/:id", auth.isAthenticated, reviewController.updateReview);

router.delete("/:id", auth.isAthenticated, reviewController.deleteReview);

module.exports = router;
