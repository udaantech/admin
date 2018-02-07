var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var propertySpokenLanguageSchema = new Schema({
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
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


var PropertySpokenLanguage = mongoose.model('PropertySpokenLanguage', propertySpokenLanguageSchema);

module.exports = PropertySpokenLanguage;