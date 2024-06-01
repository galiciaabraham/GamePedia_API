const mockingoose = require("mockingoose");
const { reviewModel } = require("../model/mongoose");
const reviewController = require("../controllers/reviewController");
const TestResponse = require("../testUtilities/testResponse");

describe("Testing review get endpoint to return all reviews", () => {
  test("should return all reviews in reviews collection", async () => {
    const _reviews = [
      {
        _id: "66495cc29f675f2a866658eb",
        UserId: 1919191919191,
        Title: "A great game by Nintendo",
        Content: "This is a great review",
        Rating: 5,
        Date: "5/19/2024",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
      {
        _id: "66502b08caf3cd8753cefcbd",
        UserId: 1919191919171,
        Title: "A LOTR Game",
        Content: "I have never seen a game so good and accurate",
        Rating: 5,
        Date: "5/24/2024",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
    ];

    mockingoose(reviewModel).toReturn(_reviews, "find");

    const req = {};
    const res = new TestResponse();

    await reviewController.getAllReviews(req, res);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(JSON.stringify(res.data))).toMatchObject(_reviews);
  });
  test("should return an error with a 500 status", async () => {
    const _reviews = "Not an array";

    mockingoose(reviewModel).toReturn(_reviews, "find");

    const req = {};
    const res = new TestResponse();

    await reviewController.getAllReviews(req, res);
    expect(res.statusCode).toBe(500);
  });
});

describe("Testing review get endpoint to return based on review id", () => {
  test("should return review based on id", async () => {
    const _review = [
      {
        _id: "66495cc29f675f2a866658eb",
        UserId: 1919191919191,
        Title: "A great game by Nintendo",
        Content: "This is a great review",
        Rating: 5,
        Date: "5/19/2024",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
    ];

    mockingoose(reviewModel).toReturn(_review, "findOne");

    const req = {
      params: { _id: "66495cc29f675f2a866658eb" },
    };
    const res = new TestResponse();

    await reviewController.getReviewById(req, res);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(JSON.stringify(res.data))).toMatchObject(_review);
  });

  test("should return an error with a 500 status", async () => {
    const _review = "No Review";

    mockingoose(reviewModel).toReturn(_review, "findOne");

    const req = {
      params: { _id: "66495cc29f675f2a866658eb" },
    };
    const res = new TestResponse();

    await reviewController.getReviewById(req, res);
    expect(res.statusCode).toBe(500);
  });
});

describe("Testing review get endpoint to return based on user id", () => {
  test("should return review based on user id", async () => {
    const _review = [
      {
        _id: "66495cc29f675f2a866658eb",
        UserId: 1919191919191,
        Title: "A great game by Nintendo",
        Content: "This is a great review",
        Rating: 5,
        Date: "5/19/2024",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
      {
        _id: "66511ec27426d64764408d58",
        UserId: 1919191919191,
        Title: "A bad game",
        Content: "I have never seen a game so bad",
        Rating: 1,
        Date: "5/24/2024",
        Verified: "True",
      },
      {
        _id: "66511ef3937e554a8435f4cc",
        UserId: 1919191919191,
        Title: "A bad game",
        Content: "I have never seen a game so bad",
        Rating: 1,
        Date: "5/24/2024",
        Verified: "True",
      },
    ];

    mockingoose(reviewModel).toReturn(_review, "find");

    const req = {
      params: { UserId: 1919191919191 },
    };
    const res = new TestResponse();

    await reviewController.getReviewsByUserId(req, res);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(JSON.stringify(res.data))).toMatchObject(_review);
  });

  test("should return an error with a 500 status", async () => {
    const _review = "No Review";

    mockingoose(reviewModel).toReturn(_review, "find");

    const req = {
      params: { UserId: 1919191919191 },
    };
    const res = new TestResponse();

    await reviewController.getReviewsByUserId(req, res);
    expect(res.statusCode).toBe(500);
  });
});

describe("Testing review get endpoint to return based on game id", () => {
  test("should return review based on game id", async () => {
    const _reviews = [
      {
        _id: "66495cc29f675f2a866658eb",
        UserId: 1919191919191,
        Title: "A great game by Nintendo",
        Content: "This is a great review",
        Rating: 5,
        Date: "5/19/2024",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
      {
        _id: "66511ec27426d64764408d58",
        UserId: 1919191919191,
        Title: "A bad game",
        Content: "I have never seen a game so bad",
        Rating: 1,
        Date: "5/24/2024",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
      {
        _id: "66511ef3937e554a8435f4cc",
        UserId: 1919191919191,
        Title: "A bad game",
        Content: "I have never seen a game so bad",
        Rating: 1,
        Date: "5/24/2024",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
    ];

    mockingoose(reviewModel).toReturn(_reviews, "find");

    const req = {
      params: { GameId: "664958029f675f2a865b4f1a" },
    };
    const res = new TestResponse();

    await reviewController.getReviewsByGameId(req, res);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(JSON.stringify(res.data))).toMatchObject(_reviews);
  });

  test("should return an error with a 500 status", async () => {
    const _review = "No Review";

    mockingoose(reviewModel).toReturn(_review, "find");

    const req = {
      params: { UserId: "664958029f675f2a865b4f1a" },
    };
    const res = new TestResponse();

    await reviewController.getReviewsByGameId(req, res);
    expect(res.statusCode).toBe(500);
  });
});

describe("Testing review controller function that posts a new review", () => {
  test("should return a 204 status code that indicates the review has been added", async () => {
    const _reviews = [];

    mockingoose(reviewModel).toReturn(_reviews, "save");

    const req = {
      body: {
        UserId: 1919191919161,
        Title: "An average game",
        Content: "I have never seen a game so average",
        Rating: 5,
        Date: "5/21/2024",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
    };
    const res = new TestResponse();

    await reviewController.createReview(req, res);
    expect(res.statusCode).toBe(204);
    expect(Array.isArray([res.data])).toBe(true);
    expect([res.data].length).toBe(1);
  });
  test("should return an error with a 500 status", async () => {
    const _reviews = [];

    mockingoose(reviewModel).toReturn(
      new Error("Error creating review"),
      "save"
    );

    const req = {
      body: {
        UserId: 1919191919161,
        Title: "An average game",
        Rating: 5,
        Date: "5/21/2024",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
    };
    const res = new TestResponse();

    await reviewController.createReview(req, res);
    expect(res.statusCode).toBe(500);
  });
});

describe("Testing review controller function that updates a review", () => {
  test("should return a 204 status code that indicates the review has been updated", async () => {
    const _review = {
      _id: "66495cc29f675f2a866658eb",
      UserId: 1919191919191,
      Title: "A great game by Nintendo",
      Content: "This is a great review",
      Rating: 5,
      Date: "5/19/2024",
      Verified: "True",
      GameId: "664958029f675f2a865b4f1a",
    };

    mockingoose(reviewModel).toReturn(
      { n: 1, nModified: 1, ok: 1 },
      "updateOne"
    );

    const req = {
      params: { reviewId: "66495cc29f675f2a866658eb" },
      body: {
        UserId: 1919191919191,
        Title: "A great game by Ubisofr",
        Content: "This is a great review and a little bit longer",
        Rating: 4,
        Date: "1/20/2023",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
    };
    const res = new TestResponse();

    await reviewController.updateReview(req, res);
    expect(res.statusCode).toBe(204);
    expect(res.data).toEqual({ n: 1, nModified: 1, ok: 1 });
  });
  test("should return an error with a 500 status", async () => {
    const _review = {
      _id: "66495cc29f675f2a866658eb",
      UserId: 1919191919191,
      Title: "A great game by Nintendo",
      Content: "This is a great review",
      Rating: 5,
      Date: "5/19/2024",
      Verified: "True",
      GameId: "664958029f675f2a865b4f1a",
    };

    mockingoose(reviewModel).toReturn(
      new Error("Error updating review"),
      "updateOne"
    );

    const req = {
      params: { reviewId: "66495cc29f675f2a866658eb" },
      body: {
        UserId: 1919191919191,
        Title: "A great game by Ubisofr",
        Content: "This is a great review and a little bit longer",
        Rating: 4,
        Date: "1/20/2023",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
    };
    const res = new TestResponse();

    await reviewController.updateReview(req, res);
    expect(res.data).toEqual({
      error: "An error occurred updating your review, please try again.",
    });
    expect(res.statusCode).toBe(500);
  });
});

describe("Testing review controller to delete an existing review", () => {
  test("should return a 204 status code that indicates the review has been deleted", async () => {
    const _review = {
      _id: "66495cc29f675f2a866658eb",
      UserId: 1919191919191,
      Title: "A great game by Nintendo",
      Content: "This is a great review",
      Rating: 5,
      Date: "5/19/2024",
      Verified: "True",
      GameId: "664958029f675f2a865b4f1a",
    };

    mockingoose(reviewModel).toReturn(
      { n: 1, deletedCount: 1, ok: 1 },
      "deleteOne"
    );

    const req = {
      params: { reviewId: "66495cc29f675f2a866658eb" },
    };
    const res = new TestResponse();

    await reviewController.deleteReview(req, res);
    expect(res.statusCode).toBe(204);
    expect(res.data).toEqual({ n: 1, deletedCount: 1, ok: 1 });
  });
  test("should return an error with a 500 status", async () => {
    const _review = {
      _id: "66495cc29f675f2a866658eb",
      UserId: 1919191919191,
      Title: "A great game by Nintendo",
      Content: "This is a great review",
      Rating: 5,
      Date: "5/19/2024",
      Verified: "True",
      GameId: "664958029f675f2a865b4f1a",
    };

    mockingoose(reviewModel).toReturn(
      new Error("Error updating review"),
      "deleteOne"
    );

    const req = {
      params: { reviewId: "66495cc29f675f2a866658eb" },
    };
    const res = new TestResponse();

    await reviewController.deleteReview(req, res);
    expect(res.data).toEqual({
      error: "Server Error while trying to delete review. Please try again.",
    });
    expect(res.statusCode).toBe(500);
  });
});
