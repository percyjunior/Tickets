var querystring = require('querystring');

exports.CrearUsuarioGet = function (req, res, next) {
  res.render('User/crearUser');
  //res.send('respond with a resource');

}

exports.ingresarLogin = function (pedido, respuesta, next) {
    mandar(respuesta, pedido.body.pass, pedido.body.email);
}
function mandar(respuesta, contra,name) {
  if (name == 'wendycalizayaperez@gmail.com' && contra == 'admin') {
    //respuesta.send('correcto');
    console.log('Contraseña correcta');
    respuesta.render('Evento/eventoCRUD');
  }
  else {
    //respuesta.send('incorrecto');
    console.log('Contraseña incorrecta');
    respuesta.render('User/login');
  }
 // console.log('Mensaje enviado: ' + info.response);
}
// res.send('veamos logeado');
exports.CrearUsuarioPost = function (req, res, next) {
  // res.render('User/crearUser');
  res.send('respond with a resource');

}

exports.MostrarUsuarios = function (req, res, next) {
  res.send('respond with a resource');
}

exports.logginGet = function (req, res, next) {
  res.render('User/login')
}

exports.logginPost = function (req, res, next) {
  res.send('respond with a resource');
}

exports.EliminarUsuarioGet = function (req, res, next) {
  res.send('respond with a resource');
}

exports.EliminarUsuarioPost = function (req, res, next) {
  res.send('respond with a resource');
}