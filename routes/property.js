var express = require('express');
var router = express.Router();
var property = require('../controllers/property');

//define routes path

router.post('/create', property.create);
router.get('/index', property.index);
router.get('/view/:id', property.view);
router.delete('/delete/:id', property.delete);
router.put("/update/:id", property.update);


module.exports = router;


