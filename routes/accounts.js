var express = require('express');
var router = express.Router();
var accounts = require('../controllers/accounts');

//define routes path

router.post('/create', accounts.create);
router.get('/', accounts.index);
router.get('/view/:id', accounts.view);
router.delete('/delete/:id', accounts.delete);
router.put("/update/:id", accounts.update);


module.exports = router;


