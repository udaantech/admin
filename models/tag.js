var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
	label: {
		type: String
	},
	categoryId: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	},
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

var Tag = mongoose.model('Tag', tagSchema);
 module.exports = Tag;