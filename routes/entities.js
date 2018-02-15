var express = require('express');
var router = express.Router();

var auth = require( "../middlewares/authentication");
var entities = require('../controllers/entities');

router.post('/create', auth.verifyToken, entities.create); 
router.post('/createEntityTag',auth.verifyToken, entities.createEntityTag);
router.get('/', auth.verifyToken, entities.index);
router.get('/publicentities', entities.publicentity);
router.get('/view/:id', auth.verifyToken, entities.view);
router.delete('/delete/:id', auth.verifyToken, entities.delete);
router.put('/update/:id', auth.verifyToken, entities.update);
router.post('/addentitytag', auth.verifyToken, entities.addEntityTag);
router.post('/removeentitytag', auth.verifyToken,entities.removeEntityTag);

module.exports = router;