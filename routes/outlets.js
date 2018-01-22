var express = require('express');
var router = express.Router();
var outlets = require('../controllers/outlets');

//define routes path

router.post('/create', outlets.create);
router.get('/', outlets.index);
router.get('/view/:id', outlets.view);
router.delete('/delete/:id', outlets.delete);
router.put("/update/:id", outlets.update);


module.exports = router;


