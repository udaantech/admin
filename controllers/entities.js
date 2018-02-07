var Entity = require('../models/entity');
var Tag = require('../models/tag');
var EntityTag = require('../models/entitytag');

//create api of entity
exports.create = function(req, res, next) {
	var response = {};
	req.checkBody("title", "Title is a required field").notEmpty();
	req.checkBody("description", "Description is a required field").notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		res.statusCode = 401;
		response = {"error": "failure", "message": errors[0].msg};
		return res.json(response);
	} else {
		var now = new Date();
		var entityCreate = new Entity({
			imageId: req.body.imageId,
			title: req.body.title,
			description: req.body.description,
			tags: req.body.tags,
			created: now,
			createdBy: req.body.createdBy
		});

		entityCreate.save(function(err, entity) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Entity created successfully", "result": entity});
			}
		});
	}
}

//create api of entity_tag
exports.createEntityTag = function(req, res, next) {
	var response = {};
	req.checkBody("entity_id", "Entity id is a required field").notEmpty();
	req.checkBody("tag_id", "Tag id is a required field").notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		res.statusCode = 401;
		response = {"error": "failure", "message": errors[0].msg};
		return res.json(response);
	} else {
		var now = new Date();
		var entityTagCreate = new EntityTag({
			entity_id: req.body.entity_id,
			tag_id: req.body.tag_id
		});

		entityTagCreate.save(function(err, entity) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Entity tag created successfully", "result": entity});
			}
		});
	}
}


//list of all Entity
exports.index = function(req, res, next) {
	var response = {};
	// req.checkQuery("keyword", "Please provide keyword as a query string in url").notEmpty();
	// var errors = req.validationErrors();
	var keyword = req.query.keyword;
	if(!keyword) {
		Entity.find()
			.populate("createdBy","_id email firstname lastname")
        	.populate("lastmodifiedby","_id email firstname lastname")
			.populate("imageId", "_id name")
			.populate("tags", "_id label")
			.exec(function(err, entity){
				if(err) {
					res.statusCode = 401;
					return res.json({"status": "failure", "statusCode": 401, "message" : err.message, "result": []});
				} else if(entity == null || entity.length == 0) {
					res.statusCode = 401;
					return res.json({"status": "failure", "statusCode": 401, "message": "Entity not found", "result": []});
				}
				return res.json({"status": "success", "statusCode": 200, "message": "Entity list", "result": entity});
			});
	} else {
		keyword = req.query.keyword;
		// if(errors) {
		// 	res.statusCode = 401;
		// 	response = {"error": "failure", "message": errors[0].msg};
		// 	return res.json(response);
		// } else {
			    var arr=[];
				where = {};
				where["label"] = {
			        $regex: keyword,
			        $options: 'i'
			    };
				Tag.find(where, { _id: 1})	
				.exec(function(err, tag){
					
					tag.forEach(function(doc){
						arr.push(doc._id);
					});

					Entity.find( { tags: { $in: arr } } )  //, { _id:1, title:1, description:1, imageId:1, tags: 1 }
						.populate("createdBy","_id email firstname lastname")
        				.populate("lastmodifiedby","_id email firstname lastname")
						.populate("imageId", "_id name")
						.populate("tags", "_id label")
						.exec(function(err, entity){
							if(err) {
								res.statusCode = 401;
								return res.json({"status": "failure", "statusCode": 401, "message" : err.message, "result": []});
							} else if(entity == null || entity.length == 0) {
								res.statusCode = 401;
								return res.json({"status": "failure", "statusCode": 401, "message": "Entity not found", "result": []});
							}
							return res.json({"status": "success", "statusCode": 200, "message": "Entity list", "result": entity});
						});
				});
			//}
	}
}

//view api of Entity
exports.view = function(req, res, next) {
	var where = {};
	where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Entity.findOne(where)
		.populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
		.populate("imageId", "_id name")
		.populate("tags", "_id label")
		.exec(function(err, entity) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(entity == null || entity.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": "Entity not found", "result": []});
			}
			return res.json({"status": "success", "statusCode": 200, "message": "Entity fetch", "result": entity});
		});
}

//delete api of Entity
exports.delete = function(req, res, next) {
	var where = {};
	where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Entity.remove(where, function(err, entity) {
		if(err) {
			res.statusCode = 401;
			return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
		}
		res.statusCode = 200;
		return res.json({"status": "success", "statusCode": 200, "message": "Entity has been deleted successfully!", "result": []});
	});

}

//update api of Entity
exports.update = function(req, res, next) {
	var response = {};
	req.checkBody("title", "Title is a required field").notEmpty();
	req.checkBody("description", "Description is a required field").notEmpty();
	var errors = req.validationErrors()
	if(errors) {
		res.statusCode = 401;
		response = {"error": "failure", "message": errors[0].msg};
		return res.json(response);
	} else {
		var now = new Date;
		var where = {};
		where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
		req.body.lastmodified = now;
		Entity.update(where, {$set: req.body}, {upsert: true}, function(err, entity) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				Entity.findById(req.params.id, function(err, entity) {
					if(err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(entity == null || entity.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": "Entity not found", "result": []});
					}
					res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Entity has been updated successfully", "result": entity});
				});
			}
		});
	}
	
}