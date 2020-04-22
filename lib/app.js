const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const cors = require('cors');
const path = require('path');
const express = require('express');
require('./db');

const app = express();

const users = require("./routes/api/users");

// Config from Environment variables
let keys = {};
keys.sessionSecret = process.env.NOTESAPP_SESSIONSECRET;

// Enable CORS
app.use(cors({
  origin:['http://localhost:3000', 'https://notes-raravi.netlify.app'],
  methods:['GET','POST'],
  // allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // enable set cookie (needed for AXIOS frontend requests)
}));

// app.options('*', cors()) // include before other routes

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

// Reset Password
app.get('/resetpassword', function(req, res) {
    res.sendFile(path.join(__dirname, '/resetpassword/index.html'));
});

module.exports = app;
