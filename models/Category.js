var mongoose = require('mongoose');

module.exports = mongoose.model('Category', {
    categoryName: String
});