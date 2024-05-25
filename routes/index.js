const router = require("express").Router();
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.get("/", (req, res) => {
  res.send("Welcome to Final Project Team 17");
});

router.use("/review", require("./reviews"));

router.use("/developer", require("./developer"));

router.use("/game", require("./games"));


router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerDocument));


module.exports = router;
