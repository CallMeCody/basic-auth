'use strict';

const mongoose = require('mongoose');
const server = require('./src/server.js');
const PORT = process.env.PORT || 3000;

const MOGODB_URI = 'mongodb://localhost:27017/auth'
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(MOGODB_URI, options)
  .then(() => {
    server.start(PORT)
  })
  .catch(e => console.error('Could not start server', e.message));