var express = require('express');
var router = express.Router();
var userRoles = require('../controllers/userRoles');

//define routes path

router.post('/create', userRoles.create);
router.delete('/delete/:id', userRoles.delete);
router.put("/update/:id", userRoles.update);
router.get('/index', userRoles.index);


module.exports = router;


