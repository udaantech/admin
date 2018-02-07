var Department = require('../models/department');

//create api of property
exports.create = function(req, res, next) {
	var response = {}; 
    req.checkBody("name", "Name is a required field").notEmpty();
    req.checkBody("type", "Department Type is a required field").notEmpty();
    req.checkBody("email", "Email is a required field").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();
    //req.checkBody("propertyId", "propertyId is a required field").notEmpty();
    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var departmentcreate = new Department({
			name: req.body.name,
			type: req.body.type,
			propertyId: req.body.propertyId,
			extension: req.body.extension,
			email: req.body.email,
			managerId: req.body.managerId,
			supervisorId: req.body.supervisorId,
			managerinDutyId: req.body.managerinDutyId,
			operatinghours: req.body.operatinghours,
			isActive: req.body.isActive,
			createdAt: now,
			createdBy: req.body.createdBy,
			
		});

		departmentcreate.save(function(err,department){
			if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Department created successfully", "result": department});
			}
		});
    }

}

//list Api of all property
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;
	Department.find(where)
        .populate("propertyId","_id name description address")
        .populate("managerId","_id firstname lastname email")
        .populate("supervisorId","_id firstname lastname email")
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedBy","_id email firstname lastname")
        .exec(function(err, department) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(department == null || department.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'department not found', "result": []});
			} 
			return res.json({"status": "success", "statusCode": 200, "message": "Department list", "result": department});
    });

}

//view Api of single property
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

    Department.findOne(where)
        .populate("propertyId","_id name description address")
        .populate("managerId","_id firstname lastname email")
        .populate("supervisorId","_id firstname lastname email")
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedBy","_id email firstname lastname")
        .exec(function(err, department) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(department == null || department.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Department not found', "result": []});
			} 
			return res.json({"status": "success", "statusCode": 200, "message": "Department fetch", "result": department});
        });
}

//delete api of property
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Department.remove(where, function(err, department) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Department has been deleted successfully!", "result": []});
	});
}

//update api of Department
exports.update = function(req, res, next) {
	var response = {}; 
    req.checkBody("name", "Name is a required field").notEmpty();
    req.checkBody("type", "Department Type is a required field").notEmpty();
    req.checkBody("email", "Email is a required field").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();
    //req.checkBody("propertyId", "propertyId is a required field").notEmpty();
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

	    Department.update(where, { $set: req.body }, {upsert: true}, function(err, property) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  Department.findById(req.params.id, function(err, department) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(department == null || department.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'department not found', "result": []});
					} 
			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Department has been updated successfully", "result": department});
			    });
			}
	    });
    }
	
}







