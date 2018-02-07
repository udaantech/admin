var express = require("express");
var router = express.Router();
var guestGroup = require('../controllers/guestGroup');

//define routes path

router.post('/create', guestGroup.create);
router.get('/', guestGroup.index);
router.get('/view/:id', guestGroup.view);
router.delete('/delete/:id', guestGroup.delete);
router.put('/update/:id', guestGroup.update);

module.exports = router;           