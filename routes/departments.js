var express = require('express');
var router = express.Router();
var department = require('../controllers/departments');

//define routes path

router.post('/create', department.create);
router.get('/', department.index);
router.get('/view/:id', department.view);
router.delete('/delete/:id', department.delete);
router.put("/update/:id", department.update);


module.exports = router;


