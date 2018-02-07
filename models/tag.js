var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
	label: {
		type: String
	},
	category: {
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

var Tag = mongoose.model('Tag', tagSchema);
 module.exports = Tag;