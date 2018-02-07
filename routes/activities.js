var express = require('express');
var router = express.Router();

var activities = require('../controllers/activities');

//define route path

router.post('/create', activities.create);
router.get('/', activities.index);
router.get('/view/:id', activities.view);
router.delete('/delete/:id', activities.delete);
router.put('/update/:id', activities.update);

module.exports = router;