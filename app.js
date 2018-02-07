var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Strategy = require('passport-facebook').Strategy;
var validator = require('express-validator');
var jwt = require('jsonwebtoken');
var config = require("./config/config");




// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
var apiRoutes = express.Router(); 

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.param('token') || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.SECRET, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;  
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
      success: false, 
      message: 'No token provided.'
    });
    
  }
  
});



var index = require('./routes/index');
var users = require('./routes/users');
var property = require('./routes/property');
var roles = require('./routes/roles');
var userRoles = require('./routes/userRole');
var accounts = require('./routes/accounts');
var contacts = require('./routes/contact');
var departments = require('./routes/departments');
var roomCategory = require('./routes/roomCategory');
var outlets = require('./routes/outlets');
var outletTypes = require('./routes/outletTypes');
var facility = require('./routes/facility');
var facilityTypes = require('./routes/facilityTypes');
var openingHours = require('./routes/openingHours');
var policy = require('./routes/policy');
var pictures = require('./routes/pictures');
var activityTypes = require('./routes/activityTypes');
var languages = require('./routes/languages');
var activities = require('./routes/activities');
var roomPolicies = require('./routes/roomPolicies');
var propertySpokenLanguages = require('./routes/propertySpokenLanguages');
var hotelRoomCategories = require('./routes/hotelRoomCategories');
var entities = require('./routes/entities');
var tags = require('./routes/tags');
var categories = require('./routes/categories');
var guest = require('./routes/guest');
var guestGroup = require('./routes/guestGroup');

var CryptoJS = require("crypto-js");

var app = express();
app.use(validator());

//app.use(bodyParser.json({limit: "50mb"}));
//app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
var jsonParser       = bodyParser.json({limit:1024*1024*20, type:'application/json'});
var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoding' });
app.use(jsonParser);
app.use(urlencodedParser);

app.use(passport.initialize());
app.use(passport.session());

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/majordomo");


// view engine setup
app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, 'views'));


//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/signup', users);
app.use('/property',apiRoutes, property);
app.use('/roles', apiRoutes, roles);
app.use('/userRoles',apiRoutes, userRoles);
app.use('/contacts',apiRoutes, contacts);
app.use('/accounts',apiRoutes, accounts);
app.use('/departments',apiRoutes, departments);
app.use('/roomCategory',apiRoutes, roomCategory);
app.use('/outlets',apiRoutes, outlets);
app.use('/outletTypes',apiRoutes, outletTypes);
app.use('/facility',apiRoutes, facility);
app.use('/facilityTypes',apiRoutes, facilityTypes);
app.use('/openingHours',apiRoutes, openingHours);
app.use('/policy',apiRoutes, policy);
app.use('/pictures',apiRoutes, pictures);
app.use('/activityTypes',apiRoutes, activityTypes);
app.use('/languages',apiRoutes, languages);
app.use('/activities', apiRoutes, activities);
app.use('/roomPolicies', apiRoutes, roomPolicies);
app.use('/propertySpokenLanguages', apiRoutes, propertySpokenLanguages);
app.use('/hotelRoomCategories', apiRoutes, hotelRoomCategories);
app.use('/entities', apiRoutes, entities);
app.use('/tags', apiRoutes, tags);
app.use('/categories', apiRoutes, categories);
app.use('/guest', apiRoutes, guest);
app.use('/guestGroup', apiRoutes, guestGroup);


var User = require('./models/user');

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

app.use(function(req, res, next){ 
  res.status(404).render('notfound');
  // res.status(404).sendFile('notfound');

});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    
    User.findOne({ email: username }, function (err, user) {   
			
      if (err) { return done(null, false); }
      if (!user) { return done(null, false); }  

      salt = user.salt;
      var bytes  = CryptoJS.AES.decrypt(user.password, salt);
      var encrypt_password = bytes.toString(CryptoJS.enc.Utf8);

      if(password == encrypt_password){
      	return done(null, user);
      } else {
		  return done(null, false);
	  }
      //if (!user.verifyPassword(password)) { return done(null, false); }
      //if (!user.verifyPassword(password)) { return done(null, false); }      
    });
  }
));

passport.use(new Strategy({
    clientID: '1039420852866707',
    clientSecret: '478fbbd9e2f6716a4c893be4d69b8a07',
    callbackURL: 'http://localhost:3000/users/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
}));

passport.serializeUser(function(user, cb) { cb(null, user.id); }); 
passport.deserializeUser(function(id, cb) { User.findById(id, function (err, user) { if (err) { return cb(err); } cb(null, user); }); });


module.exports = app;
