var express = require('express');
var router = express.Router();
var propertySpokenLanguages = require('../controllers/propertySpokenLanguages');

//define routes path

router.post('/create', propertySpokenLanguages.create);
router.get('/', propertySpokenLanguages.index);
router.get('/view/:id', propertySpokenLanguages.view);
router.delete('/delete/:id', propertySpokenLanguages.delete);
router.put("/update/:id", propertySpokenLanguages.update);


module.exports = router;

