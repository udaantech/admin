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


var index = require('./routes/index');
var users = require('./routes/users');
var property = require('./routes/property');
var roles = require('./routes/roles');
var contacts = require('./routes/contact');
var CryptoJS = require("crypto-js");

var app = express();
app.use(validator());

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
app.use('/property', property);
app.use('/roles', roles);
app.use('/contacts', contacts);


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
