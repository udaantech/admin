var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
hotelRoomCategorySchema = new Schema({
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
    },
    roomcategoryId: {
        type: Schema.Types.ObjectId,
        ref: 'RoomCategory'
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

var HotelRoomCategory = mongoose.model("HotelRoomCategory", hotelRoomCategorySchema);

module.exports = HotelRoomCategory;