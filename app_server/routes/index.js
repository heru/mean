var express = require('express');
var router = express.Router();
const mainCtrl = require('../controllers/main');

/* GET home page. */
router.get('/', mainCtrl.locationList);

module.exports = router;
