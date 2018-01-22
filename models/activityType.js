var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var activityTypeSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
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


var ActivityType = mongoose.model('ActivityType', activityTypeSchema);

// make this available to our roles in our Node applications
module.exports = ActivityType;