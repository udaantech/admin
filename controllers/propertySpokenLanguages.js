var PropertySpokenLanguage = require('../models/propertySpokenLanguage');

//create api of PropertySpokenLanguage
exports.create = function(req, res, next) {
	
	var response = {}; 
    req.checkBody("propertyId", "Property Id is a required field").notEmpty();
    req.checkBody("numberStaffSpeaking", "Number Staff Speaking is a required field").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var propertySpokenLanguageCreate = new PropertySpokenLanguage({
			propertyId: req.body.propertyId,
			numberStaffSpeaking: req.body.numberStaffSpeaking,
			created: now,
			createdBy: req.body.createdBy
		});

		propertySpokenLanguageCreate.save(function(err,propertySpokenLanguageCreate){
			if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Property Spoken Language created successfully", "result": propertySpokenLanguageCreate});
			}

		});
    }

}

//list Api of all PropertySpokenLanguage
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 PropertySpokenLanguage.find(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .populate("propertyId","_id name description address")
        .exec(function(err, propertySpokenLanguage) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(propertySpokenLanguage == null || propertySpokenLanguage.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Property Spoken Language not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Property Spoken Language list", "result": propertySpokenLanguage});
        });

}

//view Api of single PropertySpokenLanguage
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    PropertySpokenLanguage.findOne(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .populate("propertyId","_id name description address")
        .exec(function(err, propertySpokenLanguage) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(propertySpokenLanguage == null || propertySpokenLanguage.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Property Spoken Language not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Property Spoken Language fetch", "result": propertySpokenLanguage});
        });
}

//delete api of PropertySpokenLanguage
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	PropertySpokenLanguage.remove(where, function(err, propertySpokenLanguage) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Property Spoken Language has been deleted successfully!", "result": []});
	});
}

//update api of PropertySpokenLanguage
exports.update = function(req, res, next) {

	var response = {}; 
    req.checkBody("propertyId", "Property Id is a required field").notEmpty();
    req.checkBody("numberStaffSpeaking", "Number Staff Speaking is a required field").notEmpty();

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

	    PropertySpokenLanguage.update(where, { $set: req.body }, {upsert: true}, function(err, propertySpokenLanguage) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  PropertySpokenLanguage.findById(req.params.id, function(err, propertySpokenLanguage) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(propertySpokenLanguage == null || propertySpokenLanguage.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Property Spoken Language not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Property Spoken Language has been updated successfully", "result": propertySpokenLanguage});
			    });

			}

	    });
    }
	
}






