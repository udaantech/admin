var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var pictureSchema = new Schema({
    name: {
        type: String,
    },
    mime: {
       type: String,
    },
    size: {
       type: String,
    },
    storage: {
       type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    created: Date,
    lastmodified: Date,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lastmodifiedby: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    } 
});

// the schema is useless so far
// we need to create a model using it
var Picture = mongoose.model('Picture', pictureSchema);

// make this available to our users in our Node applications
module.exports = Picture;