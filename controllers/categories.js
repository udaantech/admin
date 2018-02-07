var Category = require('../models/category');

//create api of Category
exports.create = function(req, res, next) {
	var response = {};
	req.checkBody("label", "Label is a required field").notEmpty();
	req.checkBody("description", "Description is a required field").notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		res.statusCode = 401;
		response = {"error": "failure", "message": errors[0].msg};
		return res.json(response);
	} else {
		var now = new Date();
		var categoryCreate = new Category({
			label: req.body.label,
			description: req.body.description,
			created: now,
			createdBy: req.body.createdBy
		});

		categoryCreate.save(function(err, categoryCreate) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Category created successfully", "result": categoryCreate});
			}
		})
	}
}

//list api of Category
exports.index = function(req, res, next) {
	Category.find()
		.populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .exec(function(err, category) {
        	if(err) {
        		res.statusCode = 401;
        		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
        	} else if(category == null || category.length == 0) {
        		res.statusCode = 401;
        		return res.json({"status": "failure", "statusCode": 401, "message": "Category not found", "result": []});
        	}
        	res.json({"status": "success", "statusCode": 200, "message": "Category list", "result": category});
        });
}

//view api of Category
exports.view = function(req, res, next) {
	var where = {};
	where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Category.findOne(where)
		.populate("createdBy", "_id email firstname lastname")
		.populate("lastmodifiedby", "_id email firstname lastname")
		.exec(function(err, category) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(category == null || category.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": "Category not found", "result": []});
			}
			return res.json({"status": "success", "statusCode": 200, "message": "Category fetch", "result": category});
		});
}

//delete api of Category
exports.delete = function(req, res, next) {
	var where = {};
	where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Category.remove(where, function(err, category) {
		if(err) {
			res.statusCode = 401;
			return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
		} else {
			res.statusCode = 200;
			return res.json({"status": "success", "statusCode": 200, "message": "Category has been deleted successfully!", "result": []});
		}
	});
}

//update api of Category
exports.update = function(req, res, next) {
	var response = {};
	req.checkBody("label", "Label is a required field").notEmpty();
	req.checkBody("description", "Description is a required field").notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		res.statusCode = 401;
		response = {"error": "failure", "message": errors[0].msg};
		return res.json(response);
	} else {
		var where = {};
		where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
		Category.update(where, {$set: req.body}, {upsert: true}, function(err, category) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				Category.findById(req.params.id, function(err, category) {
					if(err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(category == null || category.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": "Category not found", "result": []});
					}
					return res.json({"status": "success", "statusCode": 200, "message": "Category has been updated successfully!", "result": category});
				});
			}
		});
	}
}