const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to Final Project Team 17");
});

router.use("/reviews", require("./reviews"));

module.exports = router;
