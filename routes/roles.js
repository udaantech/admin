var express = require('express');
var router = express.Router();
var roles = require('../controllers/roles');

//define routes path

router.post('/create', roles.create);
router.get('/index', roles.index);
router.get('/view/:id', roles.view);
router.delete('/delete/:id', roles.delete);
router.put("/update/:id", roles.update);


module.exports = router;


