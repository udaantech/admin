var Guest = require('../models/guest');

//create api of Guest
exports.create = function(req, res, next) {
	var response = {}; 
    req.checkBody("contactId", "Contact Id is a required field").notEmpty();
    req.checkBody("groupId", "Group Id is a required field").notEmpty();
    req.checkBody("roomNumber", "Room Number is a required field").notEmpty();
    req.checkBody("nationality", "Nationality is a required field").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var guestcreate = new Guest({
			contactId: req.body.contactId,
			groupId: req.body.groupId,
			roomNumber: req.body.roomNumber,
			nationality: req.body.nationality,
			languages: req.body.languages,
			status: req.body.status,
			checkInDate: req.body.checkInDate,
			checkOutDate: req.body.checkOutDate,
			createdAt: now,
			isActive: 1
			//createdBy: req.body.createdBy
		});

		guestcreate.save(function(err,guest){
			if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Guest created successfully", "result": guest});
			}
		});
    }

}

//list Api of all guest
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 Guest.find(where)
        .populate("contactId")
        .populate("languages","_id name")
        .exec(function(err, guest) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(guest == null || guest.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Guest not found', "result": []});
			} 		
			return res.json({"status": "success", "statusCode": 200, "message": "Guest list", "result": guest});
        });

}

//view Api of single guest
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    Guest.findOne(where)
        .populate("contactId")
        .populate("languages","_id name")
        .exec(function(err, guest) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(guest == null || guest.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Guest not found', "result": []});
			} 		
			return res.json({"status": "success", "statusCode": 200, "message": "Guest fetch", "result": guest});
        });
}

//delete api of guest
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Guest.remove(where, function(err, guest) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Guest has been deleted successfully!", "result": []});
	});
}

//update api of guest
exports.update = function(req, res, next) {
	var response = {}; 
    req.checkBody("contactId", "Contact Id is a required field").notEmpty();
    req.checkBody("groupId", "Group Id is a required field").notEmpty();
    req.checkBody("roomNumber", "Room Number is a required field").notEmpty();
    req.checkBody("nationality", "Nationality is a required field").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
	    var now = new Date();
	    var where = {};
	    where["isActive"] = true;
	    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	    req.body.updatedAt = now;

	    Guest.update(where, { $set: req.body }, {upsert: true}, function(err, guest) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  Guest.findById(req.params.id, function(err, guest) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(guest == null || guest.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Guest not found', "result": []});
					} 
			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Guest has been updated successfully", "result": guest});
			    });
			}
	    });
    }
	
}

