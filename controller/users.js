var querystring = require('querystring');

exports.CrearUsuarioGet = function (req, res, next) {
  res.render('User/crearUsuario');
  //res.send('respond with a resource');

}

exports.logginPost = function (pedido, respuesta, next) {
  res.send("Ingresndo al metodo general");
}

exports.home = function(req, res, next){
  res.render('Admin/adminHome');
}

exports.CrearUsuarioPost = function (req, res, next) {
  item = {
    nombre: req.body.nombreUsuario,
    password: req.body.password,
    paypal: req.body.paypal,
    secret: req.body.secret
  }
  console.log(item);
  res.send('respond with a resourcasdasdasdasde');

}

exports.MostrarUsuarios = function (req, res, next) {
  res.send('respond with a resource');
}

exports.logginGet = function (req, res, next) {
  res.render('User/login')
}

exports.logginPost = function (req, res, next) {
  if (req.body.email == 'wendycalizayaperez@gmail.com' && req.body.pass == 'admin' || req.body.email == 'percy21@hotmail.es' && req.body.pass == 'percygamboa') {
    console.log('Contraseña correcta');
    res.redirect('/admin');
  }
  else {
    console.log('Contraseña incorrecta');
    res.redirect('Login');
  }
}

exports.eventos = function (req, res, next){
  res.render('Admin/eventoCRUD');
}

exports.asientos = function (req, res, next){
  res.render('Admin/asientoCRUD');
}

exports.usuarios = function (req, res, next){
  res.render('Admin/usuarioCRUD');
}

exports.EliminarUsuarioGet = function (req, res, next) {
  res.send('respond with a resource');
}

exports.EliminarUsuarioPost = function (req, res, next) {
  res.send('respond with a resource');
}