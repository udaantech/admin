var express = require('express');
var router = express.Router();
var pictures = require('../controllers/pictures');

//define routes path

router.post('/create', pictures.create);
router.get('/', pictures.index);
router.get('/view/:id', pictures.view);
router.delete('/delete/:id', pictures.delete);
router.put("/update/:id", pictures.update);


module.exports = router;


