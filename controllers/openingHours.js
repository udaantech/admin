var OpeningHour = require('../models/openingHour');

//create api of opening hours
exports.create = function(req, res, next) {
	var response = {};
    req.checkBody("dayofweek", "Day of week is a required field.").notEmpty();
    req.checkBody("outletId", "Outlet Id is a required field.").notEmpty();
    req.checkBody("facilityId", "facility Id is a required field.").notEmpty();
    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var openingHourcreate = new OpeningHour({
			dayofweek: req.body.dayofweek,
			outletId: req.body.outletId,
			facilityId: req.body.facilityId,
			startTimeMorning: req.body.startTimeMorning,
			closeTimeMorning: req.body.closeTimeMorning,
			startTimeEvening: req.body.startTimeEvening,
			closeTimeEvening: req.body.closeTimeEvening,
			created: now,
			createdBy: req.body.createdBy,
			isActive: 1
		});

		openingHourcreate.save(function(err,openingHour){
			if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Opening Hour created successfully", "result": openingHour});
			}

		});
    }

}

//list Api of all opening hours
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 OpeningHour.find(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .populate("outletId","_id name")
        .populate("facilityId","_id name")
        .exec(function(err, openingHour) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(openingHour == null || openingHour.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Opening Hour not found', "result": []});
			} 	
			return res.json({"status": "success", "statusCode": 200, "message": "Opening Hour list", "result": openingHour});
        });

}

//view Api of single opening hours
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    OpeningHour.findOne(where)
        .populate("createdBy","_id email firstname lastname")
        .populate("lastmodifiedby","_id email firstname lastname")
        .populate("outletId","_id name")
        .populate("facilityId","_id name")
        .exec(function(err, openingHour) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(openingHour == null || openingHour.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Opening Hour not found', "result": []});
			} 		
			return res.json({"status": "success", "statusCode": 200, "message": "Opening Hour fetch", "result": openingHour});
        });
}

//delete api of opening hours
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	OpeningHour.remove(where, function(err, openingHour) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Opening Hour has been deleted successfully!", "result": []});
	});
}

//update api of opening hours
exports.update = function(req, res, next) {
	var response = {}; 
    req.checkBody("dayofweek", "Day of week is a required field.").notEmpty();
    req.checkBody("outletId", "Outlet Id is a required field.").notEmpty();
    req.checkBody("facilityId", "facility Id is a required field.").notEmpty();
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

	    OpeningHour.update(where, { $set: req.body }, {upsert: true}, function(err, openingHour) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'error', "result": []});
			} else {
				  OpeningHour.findById(req.params.id, function(err, openingHour) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(openingHour == null || openingHour.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'Opening Hour not found', "result": []});
					} 
			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Opening Hour has been updated successfully", "result": openingHour});
			    });

			}

	    });
    }
	
}







