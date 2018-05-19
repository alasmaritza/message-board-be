//import models
var Message = require('../models/message');
module.exports = {
    get: function (req, res) {
        Message.find({}).exec(function(err,result) {
            res.send(result);
        })
    },
    post: function(req,res) {
        console.log(req.body);
    
        var message = new Message(req.body);
        message.save();
        // no longer needed with mongoose
       // database.collection('messages').insertOne(req.body);
        res.status(200);
    }
}