'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const DB_PORT = process.env.DB_PORT || 27017;
const DB_HOST = process.env.DB_HOST || 'localhost';

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/my-retro`, {
  useMongoClient: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.get('/', function (req, res) {
  res.send('hello world')
});

app.listen(SERVER_PORT, function () {
  console.log(`Example app listening on port ${SERVER_PORT}!`);
});
