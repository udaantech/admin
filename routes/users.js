var express = require('express');
var router = express.Router();
var users = require('../controllers/users');

var LocalStrategy = require('passport-local').Strategy;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', users.login);
router.post('/register', users.register);
router.get('/failurejson', users.failurejson);
router.get('/successjson', users.successjson);
router.get('/facebook', users.loginfacebook);
router.get('/facebook/return', users.loginfacebookreturn);
router.post('/forgot', users.forgot);
router.post('/changepassword/:id', users.changepassword);
router.get('/logout', users.logout);
router.get('/index', users.index);
router.delete('/delete/:id', users.delete);
router.get('/view/:id', users.view);
router.put("/update/:id", users.update);
router.post('/create', users.create);


module.exports = router;


