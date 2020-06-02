const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var path = require('path');
var fs = require('fs');
//var mailgunStuff = require('./server/mailgun.js')
var mlabStuff = require('./server/mlab.js')

require('dotenv').config();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './index.html'));
});


app.post('/subpages/contact/thankyou.html', function(req, res){
  mailgunStuff.sendEmail(req);
  res.json({"HEY": "STUFF"});
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  mlabStuff.mongoTest(ip);

  if( multipleSubmissions ){
    res.sendFile(path.join(__dirname, './subpages/contact/multiplesubmissions.html'));
  } else {
    res.sendFile(path.join(__dirname, './subpages/contact/thankyou.html'));
  }
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;
