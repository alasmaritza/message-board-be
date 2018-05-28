var mongoose = require('mongoose');

module.exports = mongoose.model('Message', {
    resourceType: String,
    locationName: String,
    address: String,
    phone: String,
   // email: String,
    website: String,
    msg: String
});