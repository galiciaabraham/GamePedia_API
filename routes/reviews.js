const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/reviewsController');

// Create a new review
router.post('/new-review', reviewsController.createReview);

// Update an existing review
router.put('/update-review/:id', reviewsController.updateReview);

// Retrieve a review by its ID
router.get('/review/:id', reviewsController.getReviewById);

// Retrieve reviews for a specific game by its ID
router.get('/review/game/:gameId', reviewsController.getReviewsByGameId);

// Retrieve reviews for a specific user by their ID
router.get('/review/user/:userId', reviewsController.getReviewsByUserId);

// Retrieve a list of all reviews
router.get('/review', reviewsController.getAllReviews);

// Delete a review by its ID
router.delete('/review/:id', reviewsController.deleteReview);

module.exports = router;
