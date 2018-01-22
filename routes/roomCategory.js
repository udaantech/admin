var express = require('express');
var router = express.Router();
var roomCategory = require('../controllers/roomCategory');

//define routes path

router.post('/create', roomCategory.create);
router.get('/', roomCategory.index);
router.get('/view/:id', roomCategory.view);
router.delete('/delete/:id', roomCategory.delete);
router.put("/update/:id", roomCategory.update);


module.exports = router;


