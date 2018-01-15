var express = require('express');
var router = express.Router();
var contacts = require('../controllers/contacts');

//define routes path

router.post('/create', contacts.create);
router.get('/index', contacts.index);
router.get('/view/:id', contacts.view);
router.delete('/delete/:id', contacts.delete);
router.put("/update/:id", contacts.update);


module.exports = router;


