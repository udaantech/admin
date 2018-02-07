var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var guestGroupSchema = new Schema({
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
	createdAt: Date,
	updatedAt: Date,
	createBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	lastmodifiedBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

var GuestGroup = mongoose.model("GuestGroup", guestGroupSchema);

module.exports =GuestGroup;