var mongoose = require('mongoose');
//Defining Schema
var bookSchema = mongoose.Schema({


    bid: {
        type: String,
        required: true
    },

    bname: {
        type: String,
        required: true
    },

    cost: {
        type: Number,
        required: true
    },

    pname: {
        type: String,
        required: true
    },

    aname: {
        type: String,
        required: true
    }
});

var bookpackage = module.exports = mongoose.model('BookCollection', bookSchema); //Binding schema 

module.exports.addBook = function(data, callback) {
    bookpackage.create(data, callback);
}
module.exports.getBookByField = function(ret, callback) {
    bookpackage.find({bname:ret}, callback);
}
module.exports.updateBook = function(bname, data, options, callback) {
    var query = {
        bname: bname
    };
    var update = {
        bid: data.bid,
        bname: data.bname,
        cost: data.cost,
        pname: data.pname,
        aname: data.aname
    }
    bookpackage.findOneAndUpdate(query, update, options, callback);
}
module.exports.removeBook = function (bname, callback) {
    var query = {
        bname: bname
    };
    bookpackage.remove(query, callback);
}
module.exports.getDetails = function(callback) {
    bookpackage.find(callback);
}

