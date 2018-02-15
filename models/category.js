var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
	label: {
		type: String
	},
	tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
	createdAt: Date,
	updatedAt: Date,
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	lastmodifiedBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

var Category = mongoose.model("Category", categorySchema);

module.exports = Category;