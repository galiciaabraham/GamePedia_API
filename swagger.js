const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Gamepedia",
    description:
      "An API to provide information about games, developers, publishers and reviews in Json objects",
  },
  host: "cse341-final-project-team17.onrender.com",
  schemes: ["https", "http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
