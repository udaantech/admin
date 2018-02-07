var UserRole = require('../models/userRole');

//create api of userRole
exports.create = function(req, res, next) {
	var response = {}; 
    req.checkBody("userId", "User id is a required field").notEmpty();
    req.checkBody("roleId", "Role id is a required field").notEmpty();
    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {

    	var where = {};
	    where["userId"] = req.body.userId;
		where["roleId"] = req.body.roleId;
    	UserRole.findOne(where, function(err, userRole) {
	        if (err) return next(err);
	        if (!userRole) {
	        	// if not found then create
				var now = new Date();
				var userRoleCreate = new UserRole({
					userId: req.body.userId,
					roleId: req.body.roleId
				});

				userRoleCreate.save(function(err,role){
					if (err) {
					res.statusCode = 401;
					return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					}  else {
					res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Assigned role to user successfully", "result": role});
					}

				});
	        } else {
	            res.statusCode = 301;
	        	return res.json({"status": "failure", "statusCode": 301, "message": "This role is already assigned to user!", "result": []});
	        }
	    });

    
    }

}

//delete api of userRole
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	UserRole.remove(where, function(err, role) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Entries has been deleted successfully!", "result": []});
	});
}

//update api of userRrole
exports.update = function(req, res, next) {
	var response = {}; 
    req.checkBody("userId", "User id is a required field").notEmpty();
    req.checkBody("roleId", "Role id is a required field").notEmpty();
    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
	    var where = {};
	    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

	    UserRole.update(where, { $set: req.body }, {upsert: true}, function(err, role) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  UserRole.findById(req.params.id, function(err, role) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(role == null || role.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'role not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "User Role has been updated successfully", "result": role});
			    });

			}

	    });
    }
	
}


//list Api of all role
exports.index = function(req, res, next) {
	var where = {};
    //where["isActive"] = true;

	 UserRole.find(where)
        .populate("userId","_id email firstname lastname")
        .populate("roleId")
        .exec(function(err, role) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(role == null || role.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'User Role not found', "result": []});
			} 	
			return res.json({"status": "success", "statusCode": 200, "message": "User Role list", "result": role});
        });

}






