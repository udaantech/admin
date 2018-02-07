var GuestGroup = require('../models/guestGroup');

//create api of GuestGroup
exports.create = function(req, res, next) {
	var response = {};
	req.checkBody("name", "Name is a required field").notEmpty();
	req.checkBody("description", "Description is a required field").notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		res.statusCode = 401;
		response = {"error": "failure", "message": errors[0].msg};
		return res.json(response);
	} else {
		var now = new Date();
		guestGroupCreate = new GuestGroup({
			name: req.body.name,
			description: req.body.description,
			createdAt: now,
			isActive: 1
			//createdBy: req.body.createdBy
		});

		guestGroupCreate.save(function(err, guestGroupCreate) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Guest Group has been created successfully!", "result": guestGroupCreate});
			}
		});
	}
}

//list api of GuestGroup
exports.index = function(req, res, next) {
	var where = {};
	where["isActive"] = true;
	GuestGroup.find(where)
		.exec(function(err, guestGroup) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(guestGroup == null || guestGroup.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": "Guest Group not found", "result": []});
			}
			return res.json({"status": "success", "statusCode": 200, "message": "Guest Group list", "result": guestGroup});
		});
}

//view api of GuestGroup
exports.view = function(req, res, next) {
	var where = {};
	where["isActive"] = true;
	where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	GuestGroup.findOne(where)
		.exec(function(err, guestGroup) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(guestGroup == null || guestGroup.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": "Guest Group not found", "result": []});
			}
			return res.json({"status": "success", "statusCode": 200, "message": "Guest Group fetch", "result": guestGroup});
		});
}

//delete api of GuestGroup
exports.delete = function(req, res, next) {
	var where = {};
	where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	GuestGroup.remove(where, function(err, guestGroup) {
		if(err) {
			res.statusCode = 401;
			return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
		} else {
			res.statusCode = 200;
			return res.json({"status": "success", "statusCode": 200, "message": "Guest Group has been deleted successfully!", "result": []});
		}
	});
}

//update api of GuestGroup
exports.update = function(req, res, next) {
	var response = {};
	req.checkBody("name", "Name is a required field").notEmpty();
	req.checkBody("description", "Description is a required field").notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		res.statusCode = 401;
		response = {"error": "failure", "message": errors[0].msg};
		return res.json(response);
	} else {
		var now = new Date;
		var where = {};
		where["isActive"] = true;
		where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
		req.body.updatedAt = now;
		GuestGroup.update(where, {$set: req.body}, {upsert: true}, function(err, guestGroup) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				GuestGroup.findById(req.params.id, function(err, guestGroup) {
					if(err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(guestGroup == null || guestGroup.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": "Guest Group not found", "result": []});
					}
					res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Guest Group has been updated successfully!", "result": guestGroup});
				});
			}
		});
	}
	
}

