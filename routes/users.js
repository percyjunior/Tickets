var express = require('express');
var router = express.Router();
let users = require('../controller/users')

/* GET users listing. */
router.get('/CrearUsuario', users.CrearUsuarioGet);

router.post('/CrearUsuario', users.CrearUsuarioPost);

router.get('/MostratUsuarios', users.MostrarUsuarios);

router.get('/Login', users.logginGet);

router.post('/Login', users.logginPost);

router.get('/EliminarUsuario/:id', users.EliminarUsuarioGet);

router.post('/EliminarUsuario/:id', users.EliminarUsuarioPost);

router.get('/EditarUsuario/:id', users.EditarUsuarioGet);

router.post('/EditarUsuario/:id', users.EditarUsuarioPost);

module.exports = router;
