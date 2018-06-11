const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./router.js');
const request = require('request');
const axios = require('axios');
const db = require('./db');
const port = 3000;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
