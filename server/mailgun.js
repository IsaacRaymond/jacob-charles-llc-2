require('dotenv').config();

/*mailgun stuff*/
var mailgun = require("mailgun-js");
var api_key = process.env.api_key;
var DOMAIN = process.env.domain;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});



module.exports.sendEmail = function(req){
  var ip = req.headers['x-forwarded-for'] ||
       req.connection.remoteAddress ||
       req.socket.remoteAddress ||
       (req.connection.socket ? req.connection.socket.remoteAddress : null);

       var data = {
         from: req.body.email,
         to: 'lolmathstinks123@gmail.com',
         subject: req.body.subject,
         text: 'Customer name: ' +req.body.name + '\n \n Customer message: \n' + req.body.message
       };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}
