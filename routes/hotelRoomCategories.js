var express = require('express');
var router = express.Router();
var hotelRoomCategories = require('../controllers/hotelRoomCategories.js');

//define route path
router.post('/create', hotelRoomCategories.create);
router.get('/', hotelRoomCategories.index);
router.get('/view/:id', hotelRoomCategories.view);
router.delete('/delete/:id', hotelRoomCategories.delete);
router.put('/update/:id', hotelRoomCategories.update);

module.exports =router;