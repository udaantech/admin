var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entitySchema = new Schema({
	imageId: {
		type: Schema.Types.ObjectId,
		ref: 'Picture',
	},
	title: {
		type: String
	},
	description: {
		type: String
	},
	tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
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

var Entity = mongoose.model('Entity', entitySchema);

module.exports = Entity;
