var express = require('express');
var router = express.Router();
let common = require('../controller/common')

/* GET home page. */
router.get('/', common.home);

router.get('/evento', common.eventoDetalle);

let users = require('../controller/users')
/* GET users listing. */
router.get('/CrearUsuario', users.CrearUsuarioGet);

router.post('/CrearUsuario', users.CrearUsuarioPost);

router.get('/MostratUsuarios', users.MostrarUsuarios);

router.get('/Login', users.logginGet);

router.post('/Login', users.logginPost);

module.exports = router;
