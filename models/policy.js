var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var policySchema = new Schema({
    name: {
        type: String,
    },
    description: {
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
var Policy = mongoose.model('Policy', policySchema);

// make this available to our users in our Node applications
module.exports = Policy;