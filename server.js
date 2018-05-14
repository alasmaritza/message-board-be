var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;

var database;

app.use(bodyParser.json());

app.use(function(req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

app.post('/api/message', function(req,res) {
    console.log(req.body);
    database.collection('messages').insertOne(req.body);
    res.status(200);

});

mongo.connect('mongodb://localhost:27017/test', { useNewUrlParser: true },function(err,client) {
    //err,db
//if (!err) {
  //  console.log('we are connected to mongo');
    //db.collection('messages').insertOne({'msg':'test'});
//}

if (err) throw err;

var db = client.db('test');
database = db;

  //client.close();
});

var server = app.listen(5000, function() {
    console.log('listening on port ', server.address().port)
});