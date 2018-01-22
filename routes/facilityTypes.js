var express = require('express');
var router = express.Router();
var facilityTypes = require('../controllers/facilityTypes');

//define routes path

router.post('/create', facilityTypes.create);
router.get('/', facilityTypes.index);
router.get('/view/:id', facilityTypes.view);
router.delete('/delete/:id', facilityTypes.delete);
router.put("/update/:id", facilityTypes.update);


module.exports = router;


