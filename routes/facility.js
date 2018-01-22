var express = require('express');
var router = express.Router();
var facility = require('../controllers/facility');

//define routes path

router.post('/create', facility.create);
router.get('/', facility.index);
router.get('/view/:id', facility.view);
router.delete('/delete/:id', facility.delete);
router.put("/update/:id", facility.update);


module.exports = router;


