var OutletType = require('../models/outletType');

//create api of outletType
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
		var outletTypecreate = new OutletType({
			name: req.body.name,
			description: req.body.description,
			createdAt: now
			//createdBy: req.body.user
		});

		outletTypecreate.save(function(err,outletType){
			if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Outlet Type created successfully", "result": outletType});
			}
		});
    }

}

//list Api of all outletType
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 OutletType.find(where)
        //.populate("user")
        .exec(function(err, outletType) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(outletType == null || outletType.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Outlet Type not found', "result": []});
			} 			
			return res.json({"status": "success", "statusCode": 200, "message": "Outlet Type list", "result": outletType});
        });

}

//view Api of single outletType
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    OutletType.findOne(where)
        //.populate("user")
        .exec(function(err, outletType) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(outletType == null || outletType.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Outlet Type not found', "result": []});
			} 
			return res.json({"status": "success", "statusCode": 200, "message": "Outlet Type fetch", "result": outletType});
        });
}

//delete api of outletType
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	OutletType.remove(where, function(err, role) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Outlet Type has been deleted successfully!", "result": []});
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

	    OutletType.update(where, { $set: req.body }, {upsert: true}, function(err, outletType) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  OutletType.findById(req.params.id, function(err, outletType) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(outletType == null || outletType.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Outlet Type not found', "result": []});
					} 
			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Outlet Type has been updated successfully", "result": outletType});
			    });
			}
	    });
    }
	
}







