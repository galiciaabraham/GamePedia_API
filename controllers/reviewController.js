const model = require("../model/mongoose");

const getAllReviews = async (req, res) => {
  // #swagger.tags=["Reviews"]
  try {
    const reviews = await model.reviewModel.find({});
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(reviews);
  } catch (error) {
    res.status(500).send({
      error:
        "There was an error trying to retrieve the reviews. Please try again.",
    });
  }
};

const getReviewById = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const reviewId = req.params.id;
  try {
    const review = await model.reviewModel.findById(reviewId);

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(review);
  } catch (error) {
    //console.log("Error while trying to fetch review", error);
    res.status(500).send("Server Error");
  }
};

const getReviewsByGameId = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const gameId = req.params.id;
  try {
    const reviews = await model.reviewModel.find({ GameId: gameId });

    if (!reviews) {
      return res
        .status(404)
        .send("The specified game does not have any reviews");
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(reviews);
  } catch (error) {
    //console.log("Error while trying to fetch review", error);
    res.status(500).send("Server Error");
  }
};

const getReviewsByUserId = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const userId = req.params.id;
  try {
    const reviews = await model.reviewModel.find({ UserId: userId });

    if (!reviews) {
      return res
        .status(404)
        .send("The specified user does not have any reviews");
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(reviews);
  } catch (error) {
    //console.log("Error while trying to fetch review", error);
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
  try {
    const result = await model.reviewModel.create(reviewToAdd);
    res.status(204);
    res.send(result);
    if (reviewToAdd.Content == undefined) {
      //For unit testing purposes. In PROD missing req.body fields are handled by validation rules.
      throw new Error({ error: "Error creating review" });
    }
  } catch (error) {
    res.status(500).send({
      error:
        "An error occurred posting your review, please try again or contact support.",
    });
  }
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
    const result = await model.reviewModel.updateOne(
      { _id: reviewId },
      reviewToUpdate
    );
    if (result.nModified === 1) {
      res.status(204).send(result);
    }
  } catch (error) {
    res.status(500).send({
      error: "An error occurred updating your review, please try again.",
    });
  }
};

const deleteReview = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const reviewId = req.params.id;

  try {
    const result = await model.reviewModel.deleteOne({ _id: reviewId });
    if (result.deletedCount === 1) {
      res.status(204).send(result);
    }
  } catch (error) {
    res.status(500).send({
      error: "Server Error while trying to delete review. Please try again.",
    });
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  deleteReview,
  updateReview,
  getReviewsByGameId,
  getReviewsByUserId,
};
