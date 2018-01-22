var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var roomCategorySchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    pictures: {
        type: String
    },
   	numberRooms: { 
      type: String
    },
  	smokingPolicy: { 
      type: String
    },
    amneties: { 
      type: Schema.Types.ObjectId,
      //ref: 'Amenties'
    },
    viewId: { 
      type: String
    },
    area: { 
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
var RoomCategory = mongoose.model('RoomCategory', roomCategorySchema);

// make this available to our users in our Node applications
module.exports = RoomCategory;