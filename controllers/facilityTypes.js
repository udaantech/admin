var FacilityType = require('../models/facilityType');

//create api of FacilityType
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
		var facilityTypecreate = new FacilityType({
			name: req.body.name,
			description: req.body.description,
			created: now,
			createdBy: req.body.createdBy,
			//createdBy: req.body.user
		});

		facilityTypecreate.save(function(err,facilityType){
			if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "facility Type created successfully", "result": facilityType});
			}

		});
    }

}

//list Api of all Facility Type
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 FacilityType.find(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .exec(function(err, facilityType) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(facilityType == null || facilityType.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Facility Type not found', "result": []});
			} 
			return res.json({"status": "success", "statusCode": 200, "message": "Facility Type list", "result": facilityType});
        });

}

//view Api of single Facility Type
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    FacilityType.findOne(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .exec(function(err, facilityType) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(facilityType == null || facilityType.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Facility Type not found', "result": []});
			} 
			return res.json({"status": "success", "statusCode": 200, "message": "Facility Type fetch", "result": facilityType});
        });
}

//delete api of facility Type
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	FacilityType.remove(where, function(err, role) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Facility Type has been deleted successfully!", "result": []});
	});
}

//update api of facility Type
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

	    FacilityType.update(where, { $set: req.body }, {upsert: true}, function(err, facilityType) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  FacilityType.findById(req.params.id, function(err, facilityType) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(facilityType == null || facilityType.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Facility Type not found', "result": []});
					} 
			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Facility Type has been updated successfully", "result": facilityType});
			    });
			}
	    });
    }
	
}







