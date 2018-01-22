var express = require('express');
var router = express.Router();
var outletTypes = require('../controllers/outletTypes');

//define routes path

router.post('/create', outletTypes.create);
router.get('/', outletTypes.index);
router.get('/view/:id', outletTypes.view);
router.delete('/delete/:id', outletTypes.delete);
router.put("/update/:id", outletTypes.update);


module.exports = router;


