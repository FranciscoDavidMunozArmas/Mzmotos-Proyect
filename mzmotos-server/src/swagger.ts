import swaggerAutogen from 'swagger-autogen';

const outputFile = "./src/swagger.json";
const endpointFiles = ["./src/app.ts"];


swaggerAutogen(outputFile, endpointFiles);