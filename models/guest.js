var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var guestSchema = new Schema({
    contactId: {
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    },
    groupId: {
        type: String
    }, 
    roomNumber: {
        type: String
    },
    nationality: {
        type: String
    },
    languages: {
        type: Schema.Types.ObjectId,
        ref: 'Language'
    },
    status: {
        type: Boolean,
    },
    checkInDate: {
        type: Date,
    },
    checkOutDate: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        default: true
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


var Guest = mongoose.model('Guest', guestSchema);

// make this available to our roles in our Node applications
module.exports = Guest;