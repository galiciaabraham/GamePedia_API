const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
//Configurations
app.use(bodyParser.json());

// Routes
app.use("/", require("./routes/"));

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
