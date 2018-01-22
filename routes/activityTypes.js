var express = require('express');
var router = express.Router();
var activityTypes = require('../controllers/activitytypes');

//define routes path

router.post('/create', activityTypes.create);
router.get('/', activityTypes.index);
router.get('/view/:id', activityTypes.view);
router.delete('/delete/:id', activityTypes.delete);
router.put("/update/:id", activityTypes.update);


module.exports = router;


