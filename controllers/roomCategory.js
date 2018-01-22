var RoomCategory = require('../models/roomCategory');

//create api of roomCategory
exports.create = function(req, res, next) {
	
	var response = {};
    req.checkBody("name", "Name is a required field.").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var roomcategorycreate = new RoomCategory({
			name: req.body.name,
			description: req.body.description,
			pictures: req.body.pictures,
			numberRooms: req.body.numberRooms,
			smokingPolicy: req.body.smokingPolicy,
			amneties: req.body.amneties,
			viewId: req.body.viewId,
			area: req.body.area,
			createdAt: now,
			isActive: 1
		});

		roomcategorycreate.save(function(err,roomcategory){
			if (err) {
				res.statusCode = 401;
				//console.log(err.message,'=======>');
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Room Category created successfully", "result": roomcategory});
			}

		});
    }

}

//list Api of all roomCategory
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 RoomCategory.find(where)
        //.populate("user")
        .exec(function(err, roomCategory) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(roomCategory == null || roomCategory.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Room Category not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Room Category list", "result": roomCategory});
        });

}

//view Api of single roomCategory
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    RoomCategory.findOne(where)
        //.populate("user")
        .exec(function(err, roomCategory) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(roomCategory == null || roomCategory.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'room category not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Room Category fetch", "result": roomCategory});
        });
}

//delete api of RoomCategory
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	RoomCategory.remove(where, function(err, roomcategory) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}

	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Room Category has been deleted successfully!", "result": []});
	});
}

//update api of RoomCategory
exports.update = function(req, res, next) {

	var response = {}; 
    req.checkBody("name", "Name is a required field.").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
	    var where = {};
	    where["isActive"] = true;
	    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

	    RoomCategory.update(where, { $set: req.body }, {upsert: true}, function(err, roomcategory) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'error', "result": []});
			} else {
				  RoomCategory.findById(req.params.id, function(err, roomcategory) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(roomcategory == null || roomcategory.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Room Category not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Room Category has been updated successfully", "result": roomcategory});
			    });

			}

	    });
    }
	
}







