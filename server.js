var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//require in controllers
var auth = require('./controllers/auth');
var message = require('./controllers/message');

//after mongoose, global db not needed
//var database;
//object containing properties expected in message
//uppercase, something being instantiated and a model


app.use(bodyParser.json());

app.use(function(req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

app.get('/api/message', message.get);

app.post('/api/message', message.post);

//method exported to own file and brought in via require
app.post('/auth/register', auth.register);



mongoose.connect('mongodb://localhost:27017/test',function(err,db) {
    //err,db 
    //removed and reverted after mongoose, client
if (!err) {
      console.log('we are connected to mongo');
    //db.collection('messages').insertOne({'msg':'test'});
}

//if (err) throw err;

//var db = client.db('test');
//database = db;
//  client.close();
});

var server = app.listen(5000, function() {
    console.log('listening on port ', server.address().port)
});