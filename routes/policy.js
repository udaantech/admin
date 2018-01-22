var express = require('express');
var router = express.Router();
var policy = require('../controllers/policy');

//define routes path

router.post('/create', policy.create);
router.get('/', policy.index);
router.get('/view/:id', policy.view);
router.delete('/delete/:id', policy.delete);
router.put("/update/:id", policy.update);


module.exports = router;


