var express = require('express');
var router = express.Router();
var guest = require('../controllers/guest');

//define routes path

router.post('/create', guest.create);
router.get('/', guest.index);
router.get('/view/:id', guest.view);
router.delete('/delete/:id', guest.delete);
router.put("/update/:id", guest.update);

module.exports = router;


