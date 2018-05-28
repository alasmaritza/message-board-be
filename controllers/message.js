//import models
var Message = require('../models/message');
module.exports = {
    get: function (req, res) {
        Message.find({}).exec(function(err,result) {
            res.send(result);
        })
    },
    post: function(req,res) {
      //  console.log(req.body);
    
        var message = new Message(req.body);
        message.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to the database.");
        })
        // no longer needed with mongoose
       // database.collection('messages').insertOne(req.body);
      //  res.status(200);
    }
}