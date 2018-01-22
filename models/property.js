var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var propertySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    rating: {
        type: String
    },
   	address: { 
      type: String
    },
  	gps_lat: { 
      type: String
    },
    gps_lat: { 
      type: String
    },
    gps_long: { 
      type: String
    },
    socialWebsite: {
        type: String
    },
    socialFacebook: {
        type: String
    },
    socialInstagram: {
        type: String
    },
    socialTwitter: {
        type: String
    },
    socialTripadvisor: {
        type: String
    },
    numberRooms: {
        type: String
    },
    orgId: {
        type: String
    },
    salespersonId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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


var Property = mongoose.model('Property', propertySchema);

// make this available to our users in our Node applications
module.exports = Property;