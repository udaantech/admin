var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entityTagSchema = new Schema({
	entity_id: {
		type: Schema.Types.ObjectId,
		//ref: 'Picture',
	},
	tag_id: {
		type: Schema.Types.ObjectId
	}
});

var EntityTag = mongoose.model('EntityTag', entityTagSchema);

module.exports = EntityTag;
