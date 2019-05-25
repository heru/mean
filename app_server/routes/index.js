const express = require('express');
const mainCtrl = require('../controllers/main');
const otherCtrl = require('../controllers/others');

const router = express.Router();

/* GET home page. */
router.get('/', mainCtrl.locationList);
router.get('/about', otherCtrl.about);
router.get('/location', mainCtrl.location)
router.get('/location/review/new', mainCtrl.reviewAddForm)

module.exports = router;
