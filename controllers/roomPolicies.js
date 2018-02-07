var RoomPolicy = require('../models/roomPolicy');

//create api of RoomPolicy
exports.create = function(req, res, next) {
	var response = {};
	req.checkBody("propertyId", "Property Id is a required field").notEmpty();
	req.checkBody("policyId", "Policy Id is a required field").notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		res.statusCode = 401;
		response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
	} else {
    	var now = new Date();
		var roomPolicyCreate = new RoomPolicy({
			propertyId: req.body.propertyId,
			policyId: req.body.policyId,
			created: now,
			createdBy: req.body.createdBy
		});

		roomPolicyCreate.save(function(err,roomPolicyCreate){
			if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "RoomPolicy created successfully", "result": roomPolicyCreate});
			}

		});
    }

}

//list api of all RoomPolicy
exports.index = function(req, res, next) {
	var where = {};
	where["isActive"] = true;

	RoomPolicy.find(where)
		.populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .populate("propertyId", "_id name description address")
        .populate("policyId", "_id name")
        .exec(function(err, roomPolicy) {
        	if(err) {
        		res.statusCode = 401;
        		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
        	} else if(roomPolicy == null || roomPolicy.length == 0) {
        		res.statusCode = 401;
        		return res.json({"status": "failure", "statusCode": 401, "message": "RoomPolicy not found", "result": []});
        	}
        	return res.json({"status" : "success", "statusCode": 200, "message": "RoomPolicy list", "result": roomPolicy});
        });
}

//view api of single RoomPolicy
exports.view = function(req, res, next){
	var where = {};
	where["isActive"] = true;
	where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

	RoomPolicy.findOne(where)
		.populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .populate("propertyId", "_id name description address")
        .populate("policyId", "_id name")
        .exec(function(err, roomPolicy) {
        	if(err) {
        		res.statusCode = 401;
        		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
        	} else if(roomPolicy == null || roomPolicy.length == 0) {
        		res.statusCode = 401;
        		return res.json({"status": "failure", "statusCode": 401, "message": "RoomPolicy not found", "result": []});
        	}
        	return res.json({"status": "success", "statusCode": 200, "message": "RoomPolicy fetch", "result": roomPolicy});
        });
}

//delete api of RoomPolicy

exports.delete = function(req, res, next) {
	var where = {};
	where["isActive"] = true;
	where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

	RoomPolicy.remove(where, function(err, roomPolicy) {
		if(err) {
			return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
		} 
		res.statusCode = 200;
		return res.json({"status": "success", "statusCode": 200, "message": "RoomPolicy has been deleted successfully!", "result": []});
	});

}

//update api of RoomPolicy

exports.update = function(req, res, next) {
	var response = {}; 
	req.checkBody("propertyId", "Property Id is a required field").notEmpty();
	req.checkBody("policyId", "Policy Id is a required field").notEmpty();
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
	    req.body.lastmodified = now;

	    RoomPolicy.update(where, { $set: req.body }, {upsert: true}, function(err, roomPolicy) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  RoomPolicy.findById(req.params.id, function(err, roomPolicy) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(roomPolicy == null || roomPolicy.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'RoomPolicy not found', "result": []});
					} 
			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "RoomPolicy has been updated successfully", "result": roomPolicy});
			    });

			}

	    });
    }
	
}

