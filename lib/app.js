const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const cors = require('cors');
const express = require('express');
require('./db');

const app = express();

const users = require("./routes/api/users");

// Config from Environment variables
let keys = {};
keys.clientUrl = process.env.APP_CLIENTURL;

// Enable CORS
app.use(cors({
  origin:['http://localhost:3000', keys.clientUrl],
  methods:['GET','POST'],
  credentials: true // enable set cookie (needed for AXIOS frontend requests)
}));

// Rate Limiter Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000 // limit each IP to 1000 requests per windowMs
});
//  apply limiter to all requests
app.use(limiter);

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.use("/api/users", users);

module.exports = app;
