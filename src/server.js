'use strict';

// 3rd Party Resources
const express = require('express');
const app = express();

//internal modules
const authRoute = require('../src/auth/auth.js')

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use(authRoute);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening on ${port}`)
    })
  }
}