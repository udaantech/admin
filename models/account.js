var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var accountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    planid: {
        type: Schema.Types.ObjectId,
    },
    salesperson: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    billingaddress: {
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


var Account = mongoose.model('Account', accountSchema);

// make this available to our accounts in our Node applications
module.exports = Account;