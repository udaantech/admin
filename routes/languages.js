var express = require('express');
var router = express.Router();
var languages = require('../controllers/languages');

//define routes path

router.post('/create', languages.create);
router.get('/', languages.index);
router.get('/view/:id', languages.view);
router.delete('/delete/:id', languages.delete);
router.put("/update/:id", languages.update);


module.exports = router;


