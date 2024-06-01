const mockingoose = require("mockingoose");
const { publisherModel } = require("../model/mongoose");
const publishersController = require("../controllers/publishersController");
const TestResponse = require("../testUtilities/publisherTestResponse");

describe("Testing mongoose publisher  controller function that returns all publishers", () => {
  test("should return all documents in publisher collection", async () => {
    const _publisher = [
      {
        _id: "66521c37b7baeb9ae99d2acf",
        Name: "Ubisoft",
        Founded: "2020",
        Headquarters: "Canada",
        President: "John Denver",
        Website: "ubisoft.com",
        __v: 0,
      },
    ];
    mockingoose(publisherModel).toReturn(_publisher, "find");

    const req = {};
    const res = new TestResponse();

    await publishersController.getAllPublishers(req, res);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(JSON.stringify(res.data))).toMatchObject(_publisher);
  });

  test("should return an error with a 500 status", async () => {
    const _publisher = "Not an array";

    mockingoose(publisherModel).toReturn(_publisher, "find");

    const req = {};
    const res = new TestResponse();

    await publishersController.getAllPublishers(req, res);
    expect(res.statusCode).toBe(500);
  });
});

describe("Testing mongoose publisher controller function that returns a publisher using ID", () => {
  test("should return a document with one publisher from the publisher collection", async () => {
    const _publisher = {
      _id: "66521c37b7baeb9ae99d2acf",
      Name: "Ubisoft",
      Founded: "2020",
      Headquarters: "Canada",
      President: "John Denver",
      Website: "ubisoft.com",
      __v: 0,
    };

    mockingoose(publisherModel).toReturn(_publisher, "findOne");

    const req = {
      params: { id: "66521c37b7baeb9ae99d2acf" },
    };
    const res = new TestResponse();

    await publishersController.getPublisherById(req, res);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(JSON.stringify(res.data))).toMatchObject(_publisher);
  });

  test("should return an error with a 500 status", async () => {
    const _publisher = "Not an Array";

    mockingoose(publisherModel).toReturn(_publisher, "findOne");

    const req = {
      params: { id: "66521c37b7baeb9ae99d2ac1" },
    };
    const res = new TestResponse();

    await publishersController.getPublisherById(req, res);
    expect(res.statusCode).toBe(500);
  });
});

describe("Testing mongoose publisher controller function that returns a publisher using name", () => {
  test("should return a document with one publisher from the publisher collection", async () => {
    const _publisher = {
      _id: "66521c37b7baeb9ae99d2acf",
      Name: "Ubisoft",
      Founded: "2020",
      Headquarters: "Canada",
      President: "John Denver",
      Website: "ubisoft.com",
      __v: 0,
    };

    mockingoose(publisherModel).toReturn(_publisher, "findOne");

    const req = {
      params: { name: "Ubisoft" },
    };
    const res = new TestResponse();

    await publishersController.getPublisherById(req, res);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(JSON.stringify(res.data))).toMatchObject(_publisher);
  });

  test("should return an error with a 500 status", async () => {
    const _publisher = "Not an Array";

    mockingoose(publisherModel).toReturn(_publisher, "findOne");

    const req = {
      params: { name: "Ubisosts" },
    };
    const res = new TestResponse();

    await publishersController.getPublisherById(req, res);
    expect(res.statusCode).toBe(500);
  });
});
