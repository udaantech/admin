var HotelRoomCategory = require('../models/hotelRoomCategory');

//create api of HotelRoomCategory
exports.create = function(req, res, next) {
	var response = {};
	req.checkBody("propertyId", "Property Id is a required field").notEmpty();
	req.checkBody("roomcategoryId", "Room category id is a required field").notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		res.statusCode = 401;
		response = {"error": "failure", "message": errors[0].msg};
		return res.json(response);
	} else {
		var now = new Date();
		hotelRoomCategoryCreate = new HotelRoomCategory({
			propertyId: req.body.propertyId,
			roomcategoryId: req.body.roomcategoryId,
			created: now,
			createdBy: req.body.createdBy
		});

		hotelRoomCategoryCreate.save(function(err, hotelRoomCategory) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Hotel Room Category created successfully", "result": hotelRoomCategory});
			}
		});
	}
}

//list api of all HotelRoomCategory
exports.index = function(req, res, next) {
	var where = {};
	where["isActive"] = true;

	HotelRoomCategory.find(where)
		.populate("createdBy", "_id email firstname lastname")
		.populate("lastmodifiedby", "_id email firstname ladtname")
		.populate("propertyId", "_id name description address")
		.populate("roomcategoryId", "_id name description")
		.exec(function(err, hotelRoomCategory) {
			if(err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(hotelRoomCategory == null || hotelRoomCategory == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": "Hotel Room Category not found", "result": []});
			}
			return res.json({"status": "success", "statusCode": 200, "message": "Hotel Room Category list", "result": hotelRoomCategory});
		});
}

//view Api of single HotelRoomCategory
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    HotelRoomCategory.findOne(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .populate("propertyId","_id name description address")
        .populate("roomcategoryId", "_id name description")
        .exec(function(err, hotelRoomCategory) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(hotelRoomCategory == null || hotelRoomCategory.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Hotel Room Category not found', "result": []});
			} 	
			return res.json({"status": "success", "statusCode": 200, "message": "Hotel Room Category fetch", "result": hotelRoomCategory});
        });
}

//delete api of HotelRoomCategory
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	HotelRoomCategory.remove(where, function(err, role) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Hotel Room Category has been deleted successfully!", "result": []});
	});
}

//update api of HotelRoomCategory
exports.update = function(req, res, next) {
	var response = {}; 
    req.checkBody("propertyId", "Property Id is a required field").notEmpty();
    req.checkBody("roomcategoryId", "Room category id is a required field").notEmpty();
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

	    HotelRoomCategory.update(where, { $set: req.body }, {upsert: true}, function(err, hotelRoomCategory) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  HotelRoomCategory.findById(req.params.id, function(err, hotelRoomCategory) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(hotelRoomCategory == null || hotelRoomCategory.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Hotel Room Category not found', "result": []});
					} 
			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Hotel Room Category has been updated successfully", "result": hotelRoomCategory});
			    });
			}
	    });
    }
	
}






