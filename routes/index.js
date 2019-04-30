var express = require('express');
var router = express.Router();

let common = require('../controller/common')

/* GET home page. */
router.get('/', common.home);

router.get('/evento', common.eventoDetalle);

module.exports = router;
