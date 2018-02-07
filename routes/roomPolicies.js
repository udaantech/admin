var express = require("express");
var router = express.Router();

var roomPolicies = require('../controllers/roomPolicies');
//define route path

router.post('/create', roomPolicies.create);
router.get('/', roomPolicies.index);
router.get('/view/:id', roomPolicies.view);
router.delete('/delete/:id', roomPolicies.delete);
router.put('/update/:id', roomPolicies.update);

module.exports = router;