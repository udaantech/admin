var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
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
    createdBy: {
        type: Schema.Types.ObjectId,
    },
    lastmodifiedBy: {
        type: Schema.Types.ObjectId,
    } 

});


var Role = mongoose.model('Role', roleSchema);

// make this available to our roles in our Node applications
module.exports = Role;