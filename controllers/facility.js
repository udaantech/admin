var Facility = require('../models/facility');

//create api of Facility
exports.create = function(req, res, next) {
	
	var response = {};
    req.checkBody("name", "Name is a required field.").notEmpty();
    req.checkBody("description", "Description is a required field.").notEmpty();
    req.checkBody("type", "Facility Type is a required field.").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var facilitycreate = new Facility({
			name: req.body.name,
			description: req.body.description,
			type: req.body.type,
			phoneExtension: req.body.phoneExtension,
			phoneNumber: req.body.phoneNumber,
			openingHours: req.body.openingHours,
			created: now,
			createdBy: req.body.createdBy,
			isActive: 1
		});

		facilitycreate.save(function(err,facility){
			if (err) {
				res.statusCode = 401;
				//console.log(err.message,'=======>');
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Facility created successfully", "result": facility});
			}

		});
    }

}

//list Api of all Facility
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 Facility.find(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .populate("type","_id name")
        .exec(function(err, facility) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(facility == null || facility.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'facility not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "facility list", "result": facility});
        });

}

//view Api of single facility
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    Facility.findOne(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedBy","_id email firstname lastname")
        .populate("type","_id name")
        .exec(function(err, facility) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(facility == null || facility.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'facility not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "facility fetch", "result": facility});
        });
}

//delete api of facility
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Facility.remove(where, function(err, facility) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}

	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Facility has been deleted successfully!", "result": []});
	});
}

//update api of outlet
exports.update = function(req, res, next) {

	var response = {}; 
    req.checkBody("name", "Name is a required field.").notEmpty();
    req.checkBody("description", "Description is a required field.").notEmpty();
    req.checkBody("type", "Facility Type is a required field.").notEmpty();

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

	    Facility.update(where, { $set: req.body }, {upsert: true}, function(err, facility) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'error', "result": []});
			} else {
				  Facility.findById(req.params.id, function(err, facility) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(facility == null || facility.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'facility not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Facility has been updated successfully", "result": facility});
			    });

			}

	    });
    }
	
}







