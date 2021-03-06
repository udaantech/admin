var Picture = require('../models/picture');
formidable = require('formidable');
fs = require('fs');
path = require('path');

//create api of picture
exports.create = function(req, res, next) {

    	var form = new formidable.IncomingForm();
    	console.log("====>",form);
		form.parse(req, function(err, fields, files) {
	        // `file` is the name of the <input> field of type `file`
	        var old_path = files.file.path,
	            file_size = files.file.size,
	            mime = files.file.type,
	            file_ext = files.file.name.split('.').pop(),
	            index = old_path.lastIndexOf('/') + 1,
	            file_name = old_path.substr(index),
	            new_path = path.join(process.env.PWD, '/public/images/uploads/', file_name + '.' + file_ext);
	            full_file_name = file_name + '.' + file_ext;
	            //console.log("====>",files.file.type);

	            

	            var dir = path.join(process.env.PWD, '/public/images/uploads/');

				if (!fs.existsSync(dir)){
				    fs.mkdirSync(dir);
				}

		        fs.readFile(old_path, function(err, data) {
		            fs.writeFile(new_path, data, function(err) {
		                fs.unlink(old_path, function(err) {
		                    if (err) {
		                        res.statusCode = 500;
						    	response = { "error" : "failure", "message" : 'error in uploading a file!' };
						        return res.json(response); 
		                    } else {
		                        //res.status(200);
		                        //res.json({'success': true});

		                        var now = new Date();
								var picturecreate = new Picture({
									name: full_file_name,
									mime: mime,
									size: file_size,
									storage: 'local',
									created: now,
									//createdBy: req.body.createdBy,
									isActive: 1
								});

								picturecreate.save(function(err,picture){
									if (err) {
										res.statusCode = 401;
										//console.log(err.message,'=======>');
										return res.json({"status": "failure", "statusCode": 401, "message": err.message, "result": []});
									}  else {
										res.statusCode = 200;
										return res.json({"status": "success", "statusCode": 200, "message": "Picture uploaded successfully", "result": picture});
									}

								});


		                    }
		                });
		            });
		        });
	    });
	

    //return res.json({"status": "success"});
    	
	
	/*var response = {};
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
    }*/

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
    Picture.findOne(where, function(err, picture) {
    	if(picture) {
    		fs.unlink(path.join(process.env.PWD, '/public/images/uploads/', picture.name));
    	}
    });
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


	var form = new formidable.IncomingForm();
    	//console.log("====>",form);
	form.parse(req, function(err, fields, files) {
        // `file` is the name of the <input> field of type `file`
        var old_path = files.file.path,
            file_size = files.file.size,
            mime = files.file.type,
            file_ext = files.file.name.split('.').pop(),
            index = old_path.lastIndexOf('/') + 1,
            file_name = old_path.substr(index),
            new_path = path.join(process.env.PWD, '/public/images/uploads/', file_name + '.' + file_ext);
            full_file_name = file_name + '.' + file_ext;
            //console.log("====>",files.file.type);

            

            var dir = path.join(process.env.PWD, '/public/images/uploads/');

			if (!fs.existsSync(dir)){
			    fs.mkdirSync(dir);
			}

	        fs.readFile(old_path, function(err, data) {
	            fs.writeFile(new_path, data, function(err) {
	                fs.unlink(old_path, function(err) {
	                    if (err) {
	                        res.statusCode = 500;
					    	response = { "error" : "failure", "message" : 'error in uploading a file!' };
					        return res.json(response); 
	                    } else {
	                        //res.status(200);
	                        //res.json({'success': true});
	                        var now = new Date();
						    var where = {};
						    where["isActive"] = true;
						    where["_id"] = require("mongoose").Types.ObjectId(req.params.id);
						    var data = {"name": full_file_name, "mime": mime, "size": file_size, "storage": "local", "lastmodified": now};

						    //req.body.lastmodified = now;
							Picture.findOne(where, function(err, picture) {
						    	if(picture) {
						    		fs.unlink(path.join(process.env.PWD, '/public/images/uploads/', picture.name));
						    	}
						    });
						     Picture.update(where, { $set: data }, {upsert: true}, function(err, picture) {
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
	                });
	            });
	        });
    });




	/*var response = {}; 
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
    }*/
	
}







