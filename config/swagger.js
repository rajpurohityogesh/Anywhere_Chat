require("dotenv").config();
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './config/swagger-output.json';
const endpointsFiles = ['./routes/authRoutes.js'];

const doc = {
    info: {
        title: 'Anywhere Chat',
        description: 'Anywhere Chat API Docs',
        contact: {
          'name': 'Support',
          'email': 'rajpurohityogesh50@gmail.com'
      },
    },
    host: process.env.HOST_ENDPOINT, 
    schemes: [process.env.SW_SCHEMES],
    tags: [
        { name: 'Auth', description: 'Operations related to auth' },
    ],
};

swaggerAutogen(outputFile, endpointsFiles, doc);