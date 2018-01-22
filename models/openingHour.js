var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var openingHoursSchema = new Schema({
    dayofweek: {
        type: String,
    },
    outletId: {
        type: Schema.Types.ObjectId,
        ref: 'Outlet'
    },
    facilityId: {
      type: Schema.Types.ObjectId,
      ref: 'Facility'
    },
   	startTimeMorning: { 
      type: String
    },
  	closeTimeMorning: { 
      type: String
    },
    startTimeEvening: { 
       type: String
    },
    closeTimeEvening: { 
       type: String
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
var OpeningHour = mongoose.model('OpeningHour', openingHoursSchema);

// make this available to our users in our Node applications
module.exports = OpeningHour;