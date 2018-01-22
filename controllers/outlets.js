var Outlet = require('../models/outlet');

//create api of outlet
exports.create = function(req, res, next) {
	
	var response = {};
    req.checkBody("name", "Name is a required field.").notEmpty();
    req.checkBody("description", "Description is a required field.").notEmpty();
    req.checkBody("outletTypeId", "Outlet Type is a required field.").notEmpty();
    req.checkBody("email", "Email is a required field").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var outletcreate = new Outlet({
			name: req.body.name,
			description: req.body.description,
			phone: req.body.phone,
			extensionNum: req.body.extensionNum,
			email: req.body.email,
			outletTypeId: req.body.outletTypeId,
			openingtime: req.body.openingtime,
			closingtime: req.body.closingtime,
			lastordertime: req.body.lastordertime,
			outletmanagerId: req.body.outletmanagerId,
			picture: req.body.picture,
			menuId: req.body.menuId,
			createdAt: now,
			isActive: 1
		});

		outletcreate.save(function(err,outlet){
			if (err) {
				res.statusCode = 401;
				//console.log(err.message,'=======>');
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Outlet created successfully", "result": outlet});
			}

		});
    }

}

//list Api of all outlet
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 Outlet.find(where)
        .populate("outletTypeId")
        .exec(function(err, outlet) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(outlet == null || outlet.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'outlet not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "outlet list", "result": outlet});
        });

}

//view Api of single outlet
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    Outlet.findOne(where)
        .populate("outletTypeId")
        .exec(function(err, outlet) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(outlet == null || outlet.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Outlet not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "outlet fetch", "result": outlet});
        });
}

//delete api of outlet
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Outlet.remove(where, function(err, outlet) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}

	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Outlet has been deleted successfully!", "result": []});
	});
}

//update api of outlet
exports.update = function(req, res, next) {

	var response = {}; 
    req.checkBody("name", "Name is a required field.").notEmpty();
    req.checkBody("description", "Description is a required field.").notEmpty();
    req.checkBody("outletTypeId", "Outlet Type is a required field.").notEmpty();
    req.checkBody("email", "Email is a required field").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
	    var where = {};
	    where["isActive"] = true;
	    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

	    Outlet.update(where, { $set: req.body }, {upsert: true}, function(err, outlet) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'error', "result": []});
			} else {
				  Outlet.findById(req.params.id, function(err, outlet) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(outlet == null || outlet.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Outlet not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Outlet has been updated successfully", "result": outlet});
			    });

			}

	    });
    }
	
}







