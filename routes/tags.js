var express = require('express');
var router = express.Router();

var tags = require('../controllers/tags');

router.post('/create', tags.create); 
router.get('/', tags.index);
router.get('/view/:id', tags.view); 
router.delete('/delete/:id', tags.delete);
router.put('/update/:id', tags.update);

module.exports = router;