var Account = require('../models/account');

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
		var accountcreate = new Account({
			name: req.body.name,
			description: req.body.description,
			planid: req.body.planid,
			salesperson: req.body.salesperson,
			billingaddress: req.body.billingaddress,
			isActive: 1,
			createdAt: now
		});

		accountcreate.save(function(err,account){
			if (err) {
				res.statusCode = 401;
				//console.log(err.message,'=======>');
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			}  else {
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "Account created successfully", "result": account});
			}

		});
    }

}

//list Api of all account
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 Account.find(where)
     .populate("salesperson","_id email firstname lastname")
        .exec(function(err, account) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(account == null || account.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'account not found', "result": []});
			} 
			//console.log(property);
			return res.json({"status": "success", "statusCode": 200, "message": "Account list", "result": account});
        });

}

//view Api of single account
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
	 
    Account.findOne(where)
        .populate("salesperson","_id email firstname lastname")
        .exec(function(err, account) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(account == null || account.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'account not found', "result": []});
			} 
			//console.log(property);
			return res.json({"status": "success", "statusCode": 200, "message": "Account fetch", "result": account});
        });
}

//delete api of property
exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	Account.remove(where, function(err, account) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}

	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Account has been deleted successfully!", "result": []});
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

	    Account.update(where, { $set: req.body }, {upsert: true}, function(err, account) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {
				  Account.findById(req.params.id, function(err, account) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(account == null || account.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'account not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "Account has been updated successfully", "result": account});
			    });

			}

			
	    });
    }
	
}







