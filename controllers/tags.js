var Tag = require('../models/tag');

//create tag api
exports.create = function(req, res, next) {
	var response = {};
	req.checkBody("label", "Label is a required field").notEmpty();
	req.checkBody("category", "Category is a required field").notEmpty();
	var errors = req.validationErrors();
		if(errors) {
			res.statusCode = 401;
			response = {"error": "failure", "message": errors[0].msg};
			return res.json(response);
		} else {
			var now = new Date();
			var tagCreate = new Tag({
				label: req.body.label,
				category: req.body.category,
				created: now,
				createdBy: req.body.createdBy
			});

			tagCreate.save(function(err, tag) {
				if(err) {
					res.statusCode = 401;
					return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
				} else {
					res.statusCode = 200;
					return res.json({"status" : "success", "statusCode": 200, "message": "Tag created successfully", "result": tag});
				}
			});
		}
}

//list api of Tag
exports.index = function(req, res, next) {
	Tag.find()
		.populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
		.exec(function(err, tag){
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(tag == null || tag.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": "Tag not found", "result": []});
			}
			return res.json({"status": "success", "statusCode": 200, "message": "Tag list", "result": tag});
		});
}

//view api of Tag
exports.view = function(req, res, next) {
	var where = {};
	where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Tag.findOne(where)
		.populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
		.exec(function(err, tag) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(tag == null || tag == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": "Tag not found", "result": []});
			}
			res.statusCode = 200;
			return res.json({"status": "success", "statusCode": 200, "message": "Tag fetch", "result": tag});
		});
}

//delete api of tag
exports.delete = function(req, res, next) {
	var where ={};
	where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Tag.remove(where, function(err, tag) {
		if(err){
			res.statusCode = 401;
			return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
		}
		res.statusCode = 200;
		return res.json({"status": "success", "statusCode": 200, "message": "Tag has been deleted successfully!", "result": []});
	});
}

//update api of Tag
exports.update = function(req, res, next) {
	var response = {};
	req.checkBody("label", "Label is a required field").notEmpty();
	req.checkBody("category", "Category is a required field").notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		res.statusCode = 401;
		response = {"error": "failure", "message": errors[0].msg};
		return res.json(response);
	} else {
		var now = new Date();
		var where = {};
		where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
		req.body.lastmodified = now;

		Tag.update(where, {$set: req.body}, {upsert: true}, function(err, tag) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				Tag.findById(req.params.id, function(err, tag) {
					if(err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(tag == null || tag.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": "Tag not found", "result": []});
					}
					res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Tag has been updated successfully", "result": tag});
				});
			}
		});
	}
	
}