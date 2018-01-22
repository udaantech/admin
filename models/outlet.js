var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var outletSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    phone: {
        type: String
    },
   	extensionNum: { 
      type: String
    },
  	email: { 
      type: String
    },
    outletTypeId: { 
      type: Schema.Types.ObjectId,
      ref: 'OutletType'
    },
    openingtime: { 
      type: String
    },
    closingtime: { 
      type: String
    },
    lastordertime: { 
      type: String
    },
    outletmanagerId: { 
      type: Schema.Types.ObjectId,
    },
    picture: { 
      type: String,
    },
    menuId: { 
      type: Schema.Types.ObjectId,
      //ref: 'Amenties'
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
var Outlet = mongoose.model('Outlet', outletSchema);

// make this available to our users in our Node applications
module.exports = Outlet;