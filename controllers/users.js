var User = require('../models/user');
var passport = require('passport');
var CryptoJS = require("crypto-js");
var mail = require("../services/mail");
var jwt = require('jsonwebtoken');
var config = require("../config/config");



//login api
exports.login = function(req, res, next) {
	var response = {}; 
    req.checkBody("email", "Email is a required field").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();
    req.checkBody("password", "Password is a required field.").notEmpty();
    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 

    } else {
    	passport.authenticate('local', {
	    successRedirect: '/users/successjson?email='+req.body.email,
	    failureRedirect: '/users/failurejson',
	    failureFlash: false
	     })(req, res);
    }

	
	
}

exports.register = function(req, res, next) {
	var response = {}; 
    req.checkBody("email", "Email is a required field").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();
    req.checkBody("firstname", "First name is a required field.").notEmpty();
    req.checkBody("lastname", "Last name is a required field.").notEmpty();
    req.checkBody("gender", "Gender is a required field.").notEmpty();
    req.checkBody("password", "Password is a required field.").notEmpty();
    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {

    	var salt = randomString();
		var ciphertext = CryptoJS.AES.encrypt(req.body.password, salt);
		var encrypt_password = ciphertext.toString();
		var now = new Date();

		var usercreate = new User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: encrypt_password,
			gender: req.body.gender,
			salt: salt,
			verified: 1,
			createdAt: now,
			isActive: 1
		});

		usercreate.save(function(err,user){
			if (err) {
				res.statusCode = 401;
				//console.log(err.message,'=======>');
				return res.json({"status": "failure", "statusCode": 401, "message": 'Email already registered', "result": []});
			}  else {
				mail.welcomeRegisterEmail(user);
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "User created successfully", "result": user});
			}
			
			//return res.status(200).send("User created successfully");

			
		});
    }


	
	
}

exports.failurejson = function(req, res, next) {
	 res.statusCode = 401;
	 res.json({"status": "failure", "statusCode": 401, "message": "Invalid Credentials", "result": []});
}

exports.successjson = function(req, res, next) {

	var email = req.query.email;
		User.findOne( 
			{ email: email },
			{ password: 0, __v: 0 }, 
		function(err, user) {
			if (err) {
				res.send(err);
			} else if(user.isActive == false) {
				res.statusCode = 401;
				res.json({"status": "success", "statusCode": 401, "message": "Account is deactivated", "result": []});
			} else {
				const payload = {
			      admin: user.email 
			    };
			    var token = jwt.sign({ name: user.firstname, email: user.email }, config.SECRET, { expiresIn: 999999 });

				res.statusCode = 200;
				res.json({"status": "success", "statusCode": 200, "message": "Login Successfully", "result": user,"token": token});
			}
				

			

		   // console.log("========>",config.SECRET);

	        /*var token = jwt.sign(payload, config.SECRET, {
	         expiresInMinutes: 1440 // expires in 24 hours
	        });*/
			
	    });
}

exports.loginfacebook = function(req, res, next) {
	//console.log("Hello User");
	//passport.authenticate('facebook')(req, res);
	passport.authenticate("facebook", { scope : ["email"]})(req, res);
	 //res.json({"status": "success"});
}

exports.loginfacebookreturn = function(req, res, next) {

	passport.authenticate('facebook', {
	    successRedirect: '/users/successjson?username=tester',
	    failureRedirect: '/users/failurejson',
	    failureFlash: false
     })(req, res);
}


//api forgot password
exports.forgot = function(req, res, next) {
	//console.log(req.body,"====>");
    var response = {}; 
    req.checkBody("email", "Email is a required field").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();
    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
    	User.findOne({
	        email: req.body.email
	    }, function(err, user) {
	        if (err) return next(err);
	        if (!user) {
	        	res.statusCode = 301;
	        	return res.json({"status": "failure", "statusCode": 301, "message": "This email id is not registered!", "result": []});
	        } else {
	            mail.sendForgotPasswordLink(user);
	            res.statusCode = 200;
	            return res.json({"status": "success", "statusCode": 200, "message": "An email for reset password has been sent to your email id!", "result": user});
	        }
	    });

    }


   
}

//api change password
exports.changepassword = function(req, res, next) {
    var where = {};
    //where["is_deleted"] = false;
	//where["_id"] = req.params.id;
    User.findById(req.params.id, function(err, user) {
        if (err) {
        	res.statusCode = 301;
        	return res.json({"status": "failure", "statusCode": 301, "message": "Token not Found!", "result": []});	
        	//return next(err);
        } 
        else if (user == null) {
        	res.statusCode = 301;
        	return res.json({"status": "failure", "statusCode": 301, "message": "User not Found!", "result": []});
        } else if (req.body.npassword != req.body.cpassword) {
        	res.statusCode = 301;
        	return res.json({"status": "failure", "statusCode": 301, "message": "Both password not matched!", "result": []});
        } 
        else {
        	var salt = randomString();
			var ciphertext = CryptoJS.AES.encrypt(req.body.npassword, salt);
			var encrypt_password = ciphertext.toString();

            user.password = encrypt_password;
            user.salt = salt;
            user.save(function(err, result) {
                if (err) return next(err);
                res.statusCode = 200;
            	return res.json({"status": "success", "statusCode": 200, "message": "Password changed successfully!", "result": result});
            })
        }
    });
}

//list Api of all users
exports.index = function(req, res, next) {
	var where = {};
    where["isActive"] = true;

	 User.find(where,{ email: 1, firstname: 1, _id: 1, lastname: 1, isActive: 1, createdAt: 1 })
        .populate("userRoles")
        .exec(function(err, user) {
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(user == null || user.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'User not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "User list", "result": user});
        });

}

//delete api of user
/*exports.delete = function(req, res, next) {
   
	var where = {};
   // where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

    User.update(where, { $set: {isActive: false} }, {upsert: true}, function(err, user) {
        if (err) {
			res.statusCode = 401;
			return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
		} else {
			res.statusCode = 200;
			return res.json({"status": "success", "statusCode": 200, "message": "User has been deleted successfully", "result": []});

		}

    });
}*/

exports.delete = function(req, res, next) {
    var where = {};
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
	User.remove(where, function(err, user) {
    if (err) {
		res.statusCode = 401;
		return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
	}

	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "User has been deleted successfully!", "result": []});
	});
}

//view Api of user
exports.view = function(req, res, next) {
    var where = {};
    where["isActive"] = true;
    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
 
    User.findById(req.params.id)
        .populate("userRoles")
        .exec(function(err, user) {
        	//console.log("====>",role);
            if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else if(user == null || user.length == 0) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": 'user not found', "result": []});
			} 
			
			return res.json({"status": "success", "statusCode": 200, "message": "User fetch", "result": user});
        });
}

//update api of user
exports.update = function(req, res, next) {

	var response = {}; 
    req.checkBody("email", "Email is a required field").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();
    req.checkBody("firstname", "First name is a required field.").notEmpty();
    req.checkBody("lastname", "Last name is a required field.").notEmpty();
    //req.checkBody("userRoles", "Role is a required field").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {
	    var where = {};
	    where["isActive"] = true;
	    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);

	    User.update(where, { $set: req.body }, {upsert: true}, function(err, user) {
	        if (err) {
				res.statusCode = 401;
				return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
			} else {

				 /* User.findById(req.params.id, function(err, user) {
			        if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(user == null || user.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'user not found', "result": []});
					} 

			        res.statusCode = 200;
					return res.json({"status": "success", "statusCode": 200, "message": "User has been updated successfully", "result": user});
			    });*/

	    		User.findById(req.params.id)
		        .populate("userRoles")
		        .exec(function(err, user) {
		        	//console.log("====>",role);
		            if (err) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
					} else if(user == null || user.length == 0) {
						res.statusCode = 401;
						return res.json({"status": "failure", "statusCode": 401, "message": 'user not found', "result": []});
					} 
					
					return res.json({"status": "success", "statusCode": 200, "message": "User has been updated successfully", "result": user});
		        });

			}

	    });
    }
	
}

//user create api
exports.create = function(req, res, next) {
	var response = {}; 
    req.checkBody("email", "Email is a required field").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();
    req.checkBody("firstname", "First name is a required field.").notEmpty();
    req.checkBody("lastname", "Last name is a required field.").notEmpty();
    req.checkBody("password", "Password is a required field.").notEmpty();
    //req.checkBody("userRoles", "Role is a required field").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    	res.statusCode = 401;
    	response = { "error" : "failure", "message" : errors[0].msg };
        return res.json(response); 
    } else {

    	var salt = randomString();
		var ciphertext = CryptoJS.AES.encrypt(req.body.password, salt);
		var encrypt_password = ciphertext.toString();
		var now = new Date();

		var usercreate = new User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: encrypt_password,
			gender: req.body.gender,
			userRoles: req.body.userRoles,
			salt: salt,
			verified: 1,
			createdAt: now,
			isActive: 1
		});

		usercreate.save(function(err,user){
			if (err) {
				res.statusCode = 401;
				//console.log(err.message,'=======>');
				return res.json({"status": "failure", "statusCode": 401, "message": 'Email already registered', "result": []});
			}  else {
				mail.welcomeRegisterEmail(user);
				res.statusCode = 200;
				return res.json({"status": "success", "statusCode": 200, "message": "User created successfully", "result": user});
			}
			
			//return res.status(200).send("User created successfully");

			
		});
    }
	
}


//logout api
exports.logout = function(req, res, next) {
	req.logOut();
	res.statusCode = 200;
	return res.json({"status": "success", "statusCode": 200, "message": "Logout successfully!", "result": []});
}

//core function
function randomString() {
	var length =15;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}






