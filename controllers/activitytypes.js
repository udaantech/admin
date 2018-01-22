var ActivityType = require('../models/activityType');

//create api of Activity Type
exports.create = function(req, res, next) {
	
	var response = {}; 
    req.checkBody("name", "Name is a required field").notEmpty();
    req.checkBody("description", "Description is a required field").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var activityTypecreate = new ActivityType({
			name: req.body.name,
			description: req.body.description,
			created: now,
			createdBy: req.body.createdBy,
			//createdBy: req.body.user
		});

		activityTypecreate.save(function(err,activityType){
			if (err) {
				res.statusCode = 401;
				//console.log(err.message,'=======>');
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Activity Type created successfully", "result": activityType});
			}

		});
    }

}

//list Api of all activity Type
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 ActivityType.find(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .exec(function(err, activityType) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(activityType == null || activityType.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Activity Type not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Activity Type list", "result": activityType});
        });

}

//view Api of single activity Type
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    ActivityType.findOne(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .exec(function(err, activityType) {
        	//console.log("====>",role);
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(activityType == null || activityType.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Activity Type not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Activity Type fetch", "result": activityType});
        });
}

//delete api of activity Type
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	ActivityType.remove(where, function(err, role) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}

	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Activity Type has been deleted successfully!", "result": []});
	});
}

//update api of activity Type
exports.update = function(req, res, next) {

	var response = {}; 
    req.checkBody("name", "Name is a required field").notEmpty();
    req.checkBody("description", "Description is a required field").notEmpty();

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

	    ActivityType.update(where, { $set: req.body }, {upsert: true}, function(err, activityType) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  ActivityType.findById(req.params.id, function(err, activityType) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(activityType == null || activityType.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Activity Type not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Activity Type has been updated successfully", "result": activityType});
			    });

			}

	    });
    }
	
}







