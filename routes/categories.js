var express = require("express");
var router = express.Router();

var categories = require("../controllers/categories");

router.post('/create', categories.create);
router.get('/', categories.index);
router.get('/view/:id', categories.view);
router.delete('/delete/:id', categories.delete);
router.put('/update/:id', categories.update);

module.exports = router;