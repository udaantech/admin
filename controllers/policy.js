var Policy = require('../models/policy');

//create api of policy
exports.create = function(req, res, next) {
	
	var response = {};
    req.checkBody("name", "Name is a required field.").notEmpty();
    req.checkBody("description", "Description is a required field.").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var policycreate = new Policy({
			name: req.body.name,
			description: req.body.description,
			created: now,
			createdBy: req.body.createdBy,
			isActive: 1
		});

		policycreate.save(function(err,policy){
			if (err) {
				res.statusCode = 401;
				//console.log(err.message,'=======>');
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Policy created successfully", "result": policy});
			}

		});
    }

}

//list Api of all policy
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 Policy.find(where)
	 .populate("createdBy","_id email firstname lastname")
     .populate("lastmodifiedby","_id email firstname lastname")
        .exec(function(err, policy) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(policy == null || policy.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Policy not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Policy list", "result": policy});
        });

}

//view Api of single policy
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    Policy.findOne(where)
     .populate("createdBy","_id email firstname lastname")
     .populate("lastmodifiedby","_id email firstname lastname")
        .exec(function(err, policy) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(policy == null || policy.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Policy not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Policy fetch", "result": policy});
        });
}

//delete api of policy
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Policy.remove(where, function(err, policy) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}

	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Policy has been deleted successfully!", "result": []});
	});
}

//update api of policy
exports.update = function(req, res, next) {

	var response = {}; 
    req.checkBody("name", "Name is a required field.").notEmpty();
    req.checkBody("description", "Description is a required field.").notEmpty();

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

	    Policy.update(where, { $set: req.body }, {upsert: true}, function(err, policy) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'error', "result": []});
			} else {
				  Policy.findById(req.params.id, function(err, policy) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(policy == null || policy.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Policy not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Policy has been updated successfully", "result": policy});
			    });

			}

	    });
    }
	
}







