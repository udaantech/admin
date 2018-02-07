var express = require('express');
var router = express.Router();

var entities = require('../controllers/entities');

router.post('/create', entities.create);
router.post('/createEntityTag', entities.createEntityTag);
router.get('/', entities.index);
router.get('/view/:id', entities.view);
router.delete('/delete/:id', entities.delete);
router.put('/update/:id', entities.update);

module.exports = router;