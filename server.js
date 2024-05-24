const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
//Configurations
app.use(bodyParser.json());

// Routes
app.use("/", require("./routes/"));

// Handling Errors fn
app.use(async (err, req, res, next) => {
  console.error(`Error at: "${req.originalUrl}": ${err.message}`);
  res.status(500).send(`The was an error at ${req.originalUrl}`);
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
