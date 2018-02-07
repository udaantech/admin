var Language = require('../models/language');

//create api of Language
exports.create = function(req, res, next) {
	var response = {}; 
    req.checkBody("name", "Name is a required field").notEmpty();
    req.checkBody("numberStaffSpeaking", "Number Staff Speaking is a required field").notEmpty();
    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var languageCreate = new Language({
			name: req.body.name,
			flag: req.body.flag,
			numberStaffSpeaking: req.body.numberStaffSpeaking,
			created: now,
			createdBy: req.body.createdBy
		});

		languageCreate.save(function(err,languageCreate){
			if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Language created successfully", "result": languageCreate});
			}

		});
    }

}

//list Api of all Language
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 Language.find(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .exec(function(err, language) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(language == null || language.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Language not found', "result": []});
			} 		
			return res.json({"status": "success", "statusCode": 200, "message": "Language list", "result": language});
        });

}

//view Api of single language
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    Language.findOne(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .exec(function(err, language) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(language == null || language.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Language not found', "result": []});
			} 
			return res.json({"status": "success", "statusCode": 200, "message": "Language fetch", "result": language});
        });
}

//delete api of language
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Language.remove(where, function(err, language) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Language has been deleted successfully!", "result": []});
	});
}

//update api of language
exports.update = function(req, res, next) {
	var response = {}; 
    req.checkBody("name", "Name is a required field").notEmpty();
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

	    Language.update(where, { $set: req.body }, {upsert: true}, function(err, language) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  Language.findById(req.params.id, function(err, language) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(language == null || language.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Language not found', "result": []});
					} 
			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Language has been updated successfully", "result": language});
			    });
			}
	    });
    }
	
}







