var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var facilitySchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    picture: {
      type: Schema.Types.ObjectId,
      //ref: 'Picture'
    },
   	type: { 
      type: Schema.Types.ObjectId,
      ref: 'FacilityType'
    },
  	phoneExtension: { 
      type: String
    },
    phoneNumber: { 
       type: String
    },
    openingHours: { 
       type: Schema.Types.ObjectId,
       //ref: 'OpeningHours'
    },
    isActive: {
        type: Boolean,
        default: true
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

// the schema is useless so far
// we need to create a model using it
var Facility = mongoose.model('Facility', facilitySchema);

// make this available to our users in our Node applications
module.exports = Facility;