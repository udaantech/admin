var express = require('express');
var router = express.Router();
var openingHours = require('../controllers/openingHours');

//define routes path

router.post('/create', openingHours.create);
router.get('/', openingHours.index);
router.get('/view/:id', openingHours.view);
router.delete('/delete/:id', openingHours.delete);
router.put("/update/:id", openingHours.update);


module.exports = router;


