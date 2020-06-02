require('dotenv').config();

let MongoClient = require('mongodb').MongoClient;

let mongodbHost = process.env.mongodbhost;
let mongodbPort = process.env.mongodbport;
let authenticate = process.env.mlabuser + ':' + process.env.mlabpassword;

let mongodbDatabase = 'jcb-test';

let url = 'mongodb://' + authenticate + mongodbHost + ':' + mongodbPort + '/' + mongodbDatabase;

let checkForSpam;

module.exports.mongoTest = function(ip){
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client){
    if (err) throw err;

    const db = client.db('jcb-test');


    let dbIp = db.collection('testing').findOne({[ip]: 'entry'}, function (findErr, result){
      if ( result ){
        checkForSpam = true;
      } else {
        db.collection('testing').insertOne({[ip]: 'entry'}, function (findErr, result){
          if (findErr) throw findErr;
        });
        checkForSpam = false;
      }
    });

  });
}

module.exports.checkForSpam = checkForSpam;
