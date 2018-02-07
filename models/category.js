var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
	label: {
		type: String
	},
	description: {
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

var Category = mongoose.model("Category", categorySchema);

module.exports = Category;