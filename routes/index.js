const router = require("express").Router();
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const passport = require("passport");

router.get("/", (req, res) => {
  res.send("Welcome to Final Project Team 17");
});

router.use("/review", require("./reviews"));

router.use("/developer", require("./developer"));

router.use("/game", require("./games"));

router.use("/publisher", require("./publisher"));

router.use("/api-docs", swaggerUI.serve);
router.get("/api-docs", swaggerUI.setup(swaggerDocument));

router.get(
  "/login",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
