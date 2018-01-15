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
  	gps: { 
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
    orgId: {
        type: String
    },
    user: {
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
    },
    lastmodifiedBy: {
        type: Schema.Types.ObjectId,
    } 

});


var Property = mongoose.model('Property', propertySchema);

// make this available to our users in our Node applications
module.exports = Property;