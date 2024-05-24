const mongoose = require("mongoose");
const 

const getAllReviews = async (req, res) => {
  // #swagger.tags=["Reviews"]
  reviewModel
    .find({})
    .then(function (reviews) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(reviews);
    })
    .catch(function (err) {
      console.log(err);
    });
};

const getReviewById = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const reviewId = req.params.id;
  try {
    const review = await reviewModel.find({ _id: reviewId });

    if (!review[0]) {
      return res.status(404).send("Review does not exist.");
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(review[0]);
  } catch (error) {
    console.log("Error while trying to fetch review", error);
    res.status(500).send("Server Error");
  }
};

const createReview = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const reviewToAdd = {
    UserId: req.body.UserId,
    Title: req.body.Title,
    Content: req.body.Content,
    Rating: req.body.Rating,
    Date: req.body.Date,
    Verified: req.body.Verified,
  };

  const newReview = new reviewModel(reviewToAdd);

  newReview
    .save()
    .then(() => {
      console.log("Review added!");
      res.status(201).send(newReview);
    })
    .catch((error) => {
      console.log("Error adding review:", error);
      res.status(500).send("Server Error");
    });
};

const updateReview = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const reviewId = req.params.id;

  const reviewToUpdate = {
    UserId: req.body.UserId,
    Title: req.body.Title,
    Content: req.body.Content,
    Rating: req.body.Rating,
    Date: req.body.Date,
    Verified: req.body.Verified,
  };

  try {
    const updatedReview = await reviewModel.findByIdAndUpdate(
      reviewId,
      reviewToUpdate,
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).send("Review does not exist.");
    }
    console.log("Review has been sucessfully updated!");
    res.status(200).send(updatedReview);
  } catch (error) {
    console.log("Error while trying to update review: ", error);
    res.status(500).send("Server Error");
  }
};

const deleteReview = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const reviewId = req.params.id;

  try {
    const deletedReview = await reviewModel.findByIdAndDelete({
      _id: reviewId,
    });

    if (!deletedReview) {
      return res.status(404).send("Review does not exist.");
    }
    console.log("Review has been sucessfully deleted!");
    res.status(204).send();
  } catch (error) {
    console.log("Error trying to delete review: ", error);
    res.return(500).send("Server Error");
  }
};

/* const reviewSchema = new mongoose.Schema({
  UserId: String,
  Title: String,
  Content: String,
  Rating: Number,
  Date: Date,
  Verified: Boolean,
});

const reviewModel = mongoose.model("reviews", reviewSchema, "reviews");
 */
module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  deleteReview,
  updateReview,
};
