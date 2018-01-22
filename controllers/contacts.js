var Contact = require('../models/contact');

//create api of role
exports.create = function(req, res, next) {
	
	var response = {}; 
	req.checkBody("contact_type", "Contact type is a required field").notEmpty();
    req.checkBody("email", "Email is a required field").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();
    req.checkBody("first_name", "First name is a required field.").notEmpty();
    req.checkBody("last_name", "Last name is a required field.").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	var now = new Date();
		var contactcreate = new Contact({
			contact_type: req.body.contact_type,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			title: req.body.title,
			email: req.body.email,
			phone: req.body.phone,
			mobile: req.body.mobile,
			messengerwhatsApp: req.body.messengerwhatsApp,
			messengerFB: req.body.messengerFB,
			messengerLine: req.body.messengerLine,
			createdAt: now,
			isActive: 1
		});

		contactcreate.save(function(err,contact){
			if (err) {
				res.statusCode = 401;
				//console.log(err.message,'=======>');
				return res.json({"status": "failure", "statusCode": 401, "message": 'Contact already created', "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Contact created successfully", "result": contact});
			}

		});
    }

}

//list Api of all role
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 Contact.find(where)
        //.populate("user")
        .exec(function(err, contact) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(contact == null || contact.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Contact not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Contact list", "result": contact});
        });

}

//view Api of single role
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    Contact.findOne(where)
        //.populate("user")
        .exec(function(err, contact) {
        	//console.log("====>",role);
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(contact == null || contact.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'contact not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "Contact fetch", "result": contact});
        });
}

//delete api of contact
exports.delete = function(req, res, next) {
   
	var where = {};
   // where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

    Contact.update(where, { $set: {isActive: false} }, {upsert: true}, function(err, contact) {
        if (err) {
			res.statusCode = 401;
			return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
		} else {
			res.statusCode = 200;
			return res.json({"status": "success", "statusCode": 200, "message": "Contact has been deleted successfully", "result": []});

		}

    });
}

//update api of role
exports.update = function(req, res, next) {

	var response = {}; 
    req.checkBody("contact_type", "Contact type is a required field").notEmpty();
    req.checkBody("email", "Email is a required field").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();
    req.checkBody("first_name", "First name is a required field.").notEmpty();
    req.checkBody("last_name", "Last name is a required field.").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
	    var where = {};
	    where["isActive"] = true;
	    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

	    Contact.update(where, { $set: req.body }, {upsert: true}, function(err, contact) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'Contact has been deleted successfully', "result": []});
			} else {
				  Contact.findById(req.params.id, function(err, contact) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(contact == null || contact.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'contact not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Contact has been updated successfully", "result": contact});
			    });

			}

	    });
    }
	
}







