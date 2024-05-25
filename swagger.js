const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Gamepedia',
    description: 'An API to provide information about games, developers, publishers and reviews in Json objects'
  },
  host: 'localhost:3000',
  schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
