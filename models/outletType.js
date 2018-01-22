var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var outletTypeSchema = new Schema({
    name: {
        type: String
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


var OutletType = mongoose.model('OutletType', outletTypeSchema);

// make this available to our roles in our Node applications
module.exports = OutletType;