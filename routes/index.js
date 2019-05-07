var express = require('express');
var router = express.Router();
let common = require('../controller/common')

/* GET home page. */
router.get('/', common.home);

/* GET Evento page. */
let pedido = require('../controller/pedido')
router.get('/evento', pedido.eventoDetalle);

router.post('/evento', pedido.eventoDetallePost);

router.get('/evento/asientos', pedido.asientoDetalle);

router.post('/evento/asientos', pedido.asientoDetallePost);

router.get('/evento/formulario', pedido.formularioCliente);

router.post('/evento/formulario', pedido.formularioClientePost);

/* GET users listing. */
let users = require('../controller/users')
router.get('/CrearUsuario', users.CrearUsuarioGet);

router.post('/CrearUsuario', users.CrearUsuarioPost);

router.get('/MostratUsuarios', users.MostrarUsuarios);

router.get('/Login', users.logginGet);

router.post('/Login', users.logginPost);

module.exports = router;
