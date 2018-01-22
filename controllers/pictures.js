var Picture = require('../models/picture');

//create api of picture
exports.create = function(req, res, next) {
	
	var response = {};
    req.checkBody("name", "Name is a required field.").notEmpty();
    req.checkBody("storage", "Storage is a required field.").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var picturecreate = new Picture({
			name: req.body.name,
			mime: req.body.mime,
			size: req.body.size,
			storage: req.body.storage,
			created: now,
			createdBy: req.body.createdBy,
			isActive: 1
		});

		picturecreate.save(function(err,picture){
			if (err) {
				res.statusCode = 401;
				//console.log(err.message,'=======>');
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Picture created successfully", "result": picture});
			}

		});
    }

}

//list Api of all picture
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 Picture.find(where)
	 .populate("createdBy","_id email firstname lastname")
     .populate("lastmodifiedby","_id email firstname lastname")
        .exec(function(err, picture) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(picture == null || picture.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Picture not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Picture list", "result": picture});
        });

}

//view Api of single picture
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    Picture.findOne(where)
     .populate("createdBy","_id email firstname lastname")
     .populate("lastmodifiedby","_id email firstname lastname")
        .exec(function(err, picture) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(picture == null || picture.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Picture not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Picture fetch", "result": picture});
        });
}

//delete api of picture
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
    Picture.remove(where, function(err, picture) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}

	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Picture has been deleted successfully!", "result": []});
	});
}

//update api of picture
exports.update = function(req, res, next) {

	var response = {}; 
    req.checkBody("name", "Name is a required field.").notEmpty();
    req.checkBody("storage", "Storage is a required field.").notEmpty();

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

	    Picture.update(where, { $set: req.body }, {upsert: true}, function(err, picture) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'error', "result": []});
			} else {
				  Picture.findById(req.params.id, function(err, picture) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(picture == null || picture.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Policy not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Picture has been updated successfully", "result": picture});
			    });

			}

	    });
    }
	
}







