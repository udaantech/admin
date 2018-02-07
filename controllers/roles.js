var Role = require('../models/role');

//create api of role
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
		var rolecreate = new Role({
			name: req.body.name,
			description: req.body.description,
			createdAt: now
			//createdBy: req.body.user
		});

		rolecreate.save(function(err,role){
			if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Role already created', "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Role created successfully", "result": role});
			}

		});
    }

}

//list Api of all role
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 Role.find(where)
        //.populate("user")
        .exec(function(err, role) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(role == null || role.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Role not found', "result": []});
			} 
			return res.json({"status": "success", "statusCode": 200, "message": "Role list", "result": role});
        });

}

//view Api of single role
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    Role.findOne(where)
        //.populate("user")
        .exec(function(err, role) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(role == null || role.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'role not found', "result": []});
			} 
			return res.json({"status": "success", "statusCode": 200, "message": "Role fetch", "result": role});
        });
}

//delete api of role
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Role.remove(where, function(err, role) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Role has been deleted successfully!", "result": []});
	});
}

//update api of role
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
	    var where = {};
	    where["isActive"] = true;
	    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

	    Role.update(where, { $set: req.body }, {upsert: true}, function(err, role) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Role already created', "result": []});
			} else {
				  Role.findById(req.params.id, function(err, role) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(role == null || role.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'role not found', "result": []});
					} 
			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Role has been updated successfully", "result": role});
			    });

			}

	    });
    }
	
}







