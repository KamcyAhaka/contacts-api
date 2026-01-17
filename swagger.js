const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API',
    version: '1.0.0'
  },
  host: 'contacts-api-j4p0.onrender.com',
  schemes: ['https'],
  tags: [
    {
      name: 'Hello World',
      description: 'Root endpoint'
    },
    {
      name: 'Contacts',
      description: 'Contacts management endpoints'
    }
  ],
  definitions: {
    Contact: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      favoriteColor: 'Blue',
      birthday: '1990-05-15'
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
