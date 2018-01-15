var Property = require('../models/property');

//create api of property
exports.create = function(req, res, next) {
	
	var response = {}; 
    req.checkBody("name", "Name is a required field").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var propertycreate = new Property({
			name: req.body.name,
			description: req.body.description,
			address: req.body.address,
			gps: req.body.gps,
			socialWebsite: req.body.socialWebsite,
			socialFacebook: req.body.socialFacebook,
			socialInstagram: req.body.socialInstagram,
			socialTwitter: req.body.socialTwitter,
			socialTripadvisor: req.body.socialTripadvisor,
			orgId: req.body.orgId,
			rating: req.body.rating,
			user: req.body.user,
			isActive: 1,
			createdAt: now,
			createdBy: req.body.user
		});

		propertycreate.save(function(err,property){
			if (err) {
				res.statusCode = 401;
				//console.log(err.message,'=======>');
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Property created successfully", "result": property});
			}

		});
    }

}

//list Api of all property
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;
/*	Property.find(where, function(err, property) {
		if (err) {
			res.statusCode = 401;
			
			return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			//res.send(err);
		} else if(property == null || property.length == 0) {
			res.statusCode = 401;
			return res.json({"status": "failure", "statusCode": 401, "message": 'property not found', "result": []});
		} 

		res.statusCode = 200;
		return res.json({"status": "success", "statusCode": 200, "message": "Property list", "result": property});
	});*/

	 Property.find(where)
        .populate("user")
        .exec(function(err, property) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(property == null || property.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'property not found', "result": []});
			} 
			//console.log(property);
			return res.json({"status": "success", "statusCode": 200, "message": "Property list", "result": property});
        });

}

//view Api of single property
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
     where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
  /*   Property.find(where, function(err, property) {
        if (err) {
			res.statusCode = 401;
			return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
		} else if(property == null || property.length == 0) {
			res.statusCode = 401;
			return res.json({"status": "failure", "statusCode": 401, "message": 'property not found', "result": []});
		} 

        res.statusCode = 200;
		return res.json({"status": "success", "statusCode": 200, "message": "Property fetch", "result": property});
    });*/

	 
    Property.findOne(where)
        .populate("user")
        .exec(function(err, property) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(property == null || property.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'property not found', "result": []});
			} 
			console.log(property);
			return res.json({"status": "success", "statusCode": 200, "message": "Property fetch", "result": property});
        });
}

//delete api of property
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Property.remove(where, function(err, property) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}

	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Property has been deleted successfully!", "result": []});
	});
}

//update api of property
exports.update = function(req, res, next) {

	var response = {}; 
    req.checkBody("name", "Name is a required field").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
	    var where = {};
	    where["isActive"] = true;
	    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

	    Property.update(where, { $set: req.body }, {upsert: true}, function(err, property) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  Property.findById(req.params.id, function(err, property) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(property == null || property.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'property not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Property has been updated successfully", "result": property});
			    });

			}
	       
	        /*res.statusCode = 200;
			return res.json({"status": "success", "statusCode": 200, "message": "Property has been updated successfully", "result": property});*/
			
	    });
    }
	
}







