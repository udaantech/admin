var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var userRoleSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    roleId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Role'
    }
});


var UserRole = mongoose.model('userRole', userRoleSchema);

// make this available to our roles in our Node applications
module.exports = UserRole;