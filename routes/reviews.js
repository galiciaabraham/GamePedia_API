const router = require("express").Router();
const reviewController = require("../controllers/reviewController");

router.get("/", reviewController.getAllReviews);

router.get("/:id", reviewController.getReviewById);

router.get("/game/:id", reviewController.getReviewsByGameId);

router.get("/user/:id", reviewController.getReviewsByUserId);

router.post("/", reviewController.createReview);

router.put("/:id", reviewController.updateReview);

router.delete("/:id", reviewController.deleteReview);

module.exports = router;
