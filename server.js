const serverless = require('serverless-http');
const app = require('login-server-express');

module.exports.run = serverless(app);
