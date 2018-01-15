var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var contactSchema = new Schema({
    contact_type: {
        type: Schema.Types.ObjectId
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String
    },
    title: {
        type: String
    },
   	email: { 
      type: String
    },
  	phone: { 
      type: String
    },
    mobile: { 
      type: String
    },
    messengerwhatsApp: { 
      type: String
    },
    messengerFB: { 
      type: String
    },
    messengerLine: { 
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
    },
    lastmodifiedby: {
        type: Schema.Types.ObjectId,
    } 
});

// the schema is useless so far
// we need to create a model using it
var Contact = mongoose.model('Contact', contactSchema);

// make this available to our users in our Node applications
module.exports = Contact;