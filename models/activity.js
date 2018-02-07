var mongoose = require('mongoose');

var	 Schema = mongoose.Schema;

//create a schema
var activitySchema = new Schema({
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
	activityTypeId: {
		type: Schema.Types.ObjectId,
		ref: 'ActivityType'
	},
	facilityId: {
		type: Schema.Types.ObjectId,
		ref: 'Facility'
	},
	picture: [{
		type: Schema.Types.ObjectId,
		ref: 'Picture'
	}],
	inHouse: {
		type: String
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

var Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;