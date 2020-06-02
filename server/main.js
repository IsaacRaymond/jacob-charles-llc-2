const express = require('express');
const app = express();
var path = require('path');
var fs = require('fs');

require('dotenv').config();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/', function(request, response){
  console.log(request.body);
});

module.exports = app;
