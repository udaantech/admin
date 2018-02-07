var Activity = require('../models/activity');

//create api of Activity
exports.create = function(req, res, next) {
	var response = {}; 
    req.checkBody("name", "Name is a required field").notEmpty();
    req.checkBody("description", "Description is a required field").notEmpty();
    req.checkBody("activityTypeId", "Activity Type Id is a required field").notEmpty();
    req.checkBody("facilityId", "Facility Id is a required field").notEmpty();
    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var activityCreate = new Activity({
			name: req.body.name,
			description: req.body.description,
			activityTypeId: req.body.activityTypeId,
			facilityId: req.body.facilityId,
			picture: req.body.picture,
			inHouse: req.body.inHouse,
			created: now,
			createdBy: req.body.createdBy
		});

		activityCreate.save(function(err,activityCreate){
			if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Activity created successfully", "result": activityCreate});
			}
		});
    }

}

//list Api of all Activity
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 Activity.find(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .populate("activityTypeId","_id name description")
        .populate("facilityId","_id name description")
        .populate("picture","_id name")
        .exec(function(err, activity) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(activity == null || activity.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Activity not found', "result": []});
			} 
			return res.json({"status": "success", "statusCode": 200, "message": "Activity list", "result": activity});
        });

}

//view Api of single activity
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    Activity.findOne(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .populate("activityTypeId","_id name description")
        .populate("facilityId","_id name description")
        .populate("picture","_id name")
        .exec(function(err, activity) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(activity == null || activity.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Activity not found', "result": []});
			} 		
			return res.json({"status": "success", "statusCode": 200, "message": "Activity fetch", "result": activity});
        });
}

//delete api of activity
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Activity.remove(where, function(err, activity) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Activity has been deleted successfully!", "result": []});
	});
}

//update api of activity
exports.update = function(req, res, next) {
	var response = {}; 
    req.checkBody("name", "Name is a required field").notEmpty();
    req.checkBody("description", "Description is a required field").notEmpty();
    req.checkBody("activityTypeId", "Activity Type Id is a required field").notEmpty();
    req.checkBody("facilityId", "Facility Id is a required field").notEmpty();
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

	    Activity.update(where, { $set: req.body }, {upsert: true}, function(err, activity) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  Activity.findById(req.params.id, function(err, activity) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(activity == null || activity.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Activity not found', "result": []});
					} 
			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Activity has been updated successfully", "result": activity});
			    });
			}
	    });
    }
	
}







