var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
    },
    extension: {
        type: String
    },
    email: {
        type: String
    },
    managerId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    supervisorId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    managerinDutyId: {
        type: Schema.Types.ObjectId
    },
    operatinghours: {
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
        ref: 'User'
    },
    lastmodifiedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    } 

});


var Department = mongoose.model('Department', departmentSchema);

// make this available to our accounts in our Node applications
module.exports = Department;