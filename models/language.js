var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var languageSchema = new Schema({
    name: {
        type: String
    },
    flag: {
        type: Boolean,
        default: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    numberStaffSpeaking: {
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


var Language = mongoose.model('Language', languageSchema);

module.exports = Language;