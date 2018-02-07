var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//create a schema

var roomPolicySchema = new Schema({
	propertyId: {
		type: Schema.Types.ObjectId,
		ref: 'Property'
	},
	policyId: {
		type: Schema.Types.ObjectId,
		ref: 'Policy'
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
    },
    isActive: {
    	type: Boolean,
    	default: true
    }
});

var RoomPolicy = mongoose.model("RoomPolicy", roomPolicySchema);

module.exports = RoomPolicy;

